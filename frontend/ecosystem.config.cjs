module.exports = {
  apps: [
    {
      name: "astro-4321",
      script: "../dev/start-server.sh",
      instances: 1,
      exec_mode: "fork",
      env: {
        PATH: "/home/lovestaco/.bun/bin:" + (process.env.PATH || ""),
        UV_THREADPOOL_SIZE: 64,
        PORT: 4321
      }
    },
    {
      name: "astro-4322",
      script: "../dev/start-server.sh",
      instances: 1,
      exec_mode: "fork",
      env: {
        PATH: "/home/lovestaco/.bun/bin:" + (process.env.PATH || ""),
        UV_THREADPOOL_SIZE: 64,
        PORT: 4322
      }
    }
  ]
};
