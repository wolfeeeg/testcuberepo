// Cube.js configuration options: https://cube.dev/docs/config

// NOTE: third-party dependencies and the use of require(...) are disabled for
// CubeCloud users by default.  Please contact support if you need them
// enabled for your account.  You are still allowed to require
// @cubejs-backend/*-driver packages.fdsf22fewfew

module.exports = {
};

/*
const CubestoreDriver = require('@cubejs-backend/cubestore-driver');
const driver = new CubestoreDriver({
  url: "ws://localhost-1-2:36bfb5b7eac5775d619a32c62ca53b67a6fec6b2d8dde719dc206b9b9b448bf4@host.docker.internal:3030/ws"
});
//driver.query("SELECT * FROM public.orders").then(console.log);
driver
  .query('SHOW TABLES')
  .then((data) => {
    console.log('datadata', data);
  })
  .catch((errr) => {
    console.log('errr', errr);
  });*/


     const CubestoreDriver = require('@cubejs-backend/cubestore-driver');
     const driver = new CubestoreDriver({
       url: 'ws://localhost-1-2:36bfb5b7eac5775d619a32c62ca53b67a6fec6b2d8dde719dc206b9b9b448bf4@host.docker.internal:3030/ws',
     });

    setInterval(
      (driver) => {
        driver
          .query('/* test */ SHOW TABLES')
          .then((data) => {
            console.log('datadata', data);
          })
          .catch((errr) => {
            console.log('errr', errr);
          });
      },
      10000,
      driver
    );