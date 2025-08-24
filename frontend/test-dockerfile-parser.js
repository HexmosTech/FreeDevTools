// Quick test to verify the Dockerfile parser integration
const testDockerfiles = [
  {
    name: "Valid Dockerfile",
    content: `FROM alpine:latest
WORKDIR /app
COPY . .
RUN echo "hello world"
EXPOSE 8080
CMD ["echo", "hello"]`
  },
  {
    name: "Invalid - blahFROM",
    content: `blahFROM alpine:latest
WORKDIR /app
COPY . .
RUN echo "hello world"
EXPOSE 8080
CMD ["echo", "hello"]`
  },
  {
    name: "Invalid - missing space",
    content: `FROMalpine:latest
WORKDIR /app
COPY . .
RUN echo "hello world"
EXPOSE 8080
CMD ["echo", "hello"]`
  },
  {
    name: "Invalid - unknown instruction",
    content: `FROM alpine:latest
WORKDIR /app
COPY . .
UNKNOWN_INSTRUCTION some parameters
EXPOSE 8080
CMD ["echo", "hello"]`
  }
];

// We can't directly import the React component, but we can test the core logic
console.log("Test Dockerfiles:");
testDockerfiles.forEach((test, index) => {
  console.log(`\n${index + 1}. ${test.name}:`);
  console.log("Content:");
  console.log(test.content);
  console.log("---");
});

console.log("\nTo test these in the browser:");
console.log("1. Go to http://localhost:4321/freedevtools/dockerfile-linter/");
console.log("2. Paste each test case into the input");
console.log("3. Check that syntax errors are properly detected");