module.exports = {
  port: process.env.PORT || 3001,
  ip: process.env.IP,
  postgres: {
    uri: 'postgres://localhost:5432/homecache-test',
  },
};
