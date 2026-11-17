// Point d'entrée Serverless pour Vercel
const app = require('../server');

module.exports = (req, res) => {
  return app(req, res);
};
