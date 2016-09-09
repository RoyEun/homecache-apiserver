module.exports = {
  port: process.env.PORT,
  ip: process.env.IP,
  postgres: {
    uri: 'postgres://localhost:5432/homecache-dev'
  },
};
