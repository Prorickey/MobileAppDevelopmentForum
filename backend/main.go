package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"sync"
)

type User struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

type LoginResponse struct {
	ID       int    `json:"id"`
	Username string `json:"username"`
}

var (
	users       = make(map[string]*User)
	nextID      = 1
	mu          sync.Mutex
	storageFile = "users.json"
)

func main() {
	loadUsers()

	http.HandleFunc("/login", loginHandler)

	fmt.Println("Server starting on :8080...")
	log.Fatal(http.ListenAndServe("0.0.0.0:8080", nil))
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error reading request", http.StatusBadRequest)
		return
	}

	var req LoginRequest
	if err := json.Unmarshal(body, &req); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	mu.Lock()
	defer mu.Unlock()

	user, exists := users[req.Username]

	if !exists {
		// Create new user
		user = &User{
			ID:       nextID,
			Username: req.Username,
			Password: req.Password,
		}
		users[req.Username] = user
		nextID++
		saveUsers()
	} else {
		// User exists - verify password
		if user.Password != req.Password {
			http.Error(w, "Invalid password", http.StatusUnauthorized)
			return
		}
	}

	// Return user data (same structure for both new and existing users)
	response := LoginResponse{
		ID:       user.ID,
		Username: user.Username,
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func loadUsers() {
	data, err := os.ReadFile(storageFile)
	if err != nil {
		// File doesn't exist yet, start fresh
		return
	}

	var userList []User
	if err := json.Unmarshal(data, &userList); err != nil {
		log.Printf("Error loading users: %v", err)
		return
	}

	for i := range userList {
		users[userList[i].Username] = &userList[i]
		if userList[i].ID >= nextID {
			nextID = userList[i].ID + 1
		}
	}
}

func saveUsers() {
	userList := make([]User, 0, len(users))
	for _, user := range users {
		userList = append(userList, *user)
	}

	data, err := json.MarshalIndent(userList, "", "  ")
	if err != nil {
		log.Printf("Error marshaling users: %v", err)
		return
	}

	if err := os.WriteFile(storageFile, data, 0644); err != nil {
		log.Printf("Error saving users: %v", err)
	}
}
