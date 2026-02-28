package main

import (
	"flag"
	"log"
	"os"
)

func main() {
	logFile, err := os.OpenFile("static-generator.log", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0666)
	if err != nil {
		log.Fatalf("error opening log file static-generator.log: %v", err)
	}
	defer logFile.Close()

	log.SetOutput(logFile)

	section := flag.String("section", "", "Section to generate (e.g., mcp)")
	flag.Parse()

	log.Printf("Starting static generator for section: %s", *section)

	if *section == "mcp" {
		GenerateMCP()
	} else {
		log.Fatalf("Unknown or missing section. Usage: go run cmd/static-generator/main.go --section mcp")
	}
}
