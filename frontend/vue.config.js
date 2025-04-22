// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// frontend/vue.config.js
module.exports = {
  devServer: {
    // listen on all interfaces so Codespaces can forward it
    host: "0.0.0.0",
    port: 8080,
    // allow all hosts (GitHub .dev domain won’t be disallowed)
    allowedHosts: "all",

    client: {
      // Tell the client to auto‑detect protocol/host/port
      // and use wss:// when loaded over HTTPS
      webSocketURL: "auto://0.0.0.0:0/ws"
    },

  }
};
