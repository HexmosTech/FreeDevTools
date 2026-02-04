package main

import (
	"fmt"
	"log"
	"net/http"
	"path/filepath"
)

func main() {
	assetsPath, _ := filepath.Abs("assets")
	fmt.Printf("Assets path: %s\n", assetsPath)
	
	mux := http.NewServeMux()
	staticHandler := http.StripPrefix("/static/", http.FileServer(http.Dir(assetsPath)))
	mux.Handle("/static/", staticHandler)
	
	log.Println("Test server on :8081")
	http.ListenAndServe(":8081", mux)
}

