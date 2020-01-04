// habilitando o Cors
module.exports = function(req, res, next) {
  res.header("Acess-Cotrol-Allow-Origin", "*");
  res.header(
    "Acess-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Acess-Control-Allow-Headers",
    "Origin, X-requested-with, Content-Type, Accept"
  );
  next();
};
