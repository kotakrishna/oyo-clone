const path = require("path");

module.exports = {
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/oyo-clone",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  future: {
    webpack5: true,
  },
};
