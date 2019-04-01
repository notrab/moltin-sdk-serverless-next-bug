module.exports = {
  target: 'serverless',
  env: {
    MOLTIN_CLIENT_ID: 'EdP3Gi1agyUF3yFS7Ngm8iyodLgbSR3wY4ceoJl0d2'
  },
  webpack(config, options) {
    config.node = {
      fs: 'empty'
    }
    return config
  }
}
