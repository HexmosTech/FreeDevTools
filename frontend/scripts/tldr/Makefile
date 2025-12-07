.PHONY: build run clean

BINARY_NAME=tldr_to_db
SQLITE_DB_FILE=/home/gk/hexmos/FreeDevTools/frontend/db/all_dbs/tldr-db-v1.db
SQLITE_QUERY_FILE=query.sql

SQL_BINARY_NAME=sqlite-lookup

build:
	go build -o $(BINARY_NAME) tldr_to_db.go

run:
	go run tldr_to_db.go

clean:
	rm -f $(BINARY_NAME)



execute: 
	./$(SQL_BINARY_NAME)  --show-data  $(SQLITE_QUERY_FILE) $(SQLITE_DB_FILE)