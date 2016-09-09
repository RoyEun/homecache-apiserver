module.exports = {
  port: process.env.PORT || 8080,
  ip: process.env.IP,
  postgres: {
    uri: 'postgres://localhost:5432/homecache',
  },
};
