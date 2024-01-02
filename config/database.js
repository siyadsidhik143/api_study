var mongoose = require("mongoose");
require("dotenv").config();

const clientOption = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
  autoIndex: false, // Don't build indexes
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  // socketTimeoutMS: 30000, // Close sockets after 45 seconds of inactivity
  // family: 4 // Use IPv4, skip trying IPv6
};

const initConfigDBConnection = () => {
  try {
    let configDbConnection = global.globalConfigDBConnection
      ? global.globalConfigDBConnection
      : new Object();
    configDbConnection = new Object();
    configDbConnection = mongoose.createConnection(
      process.env.CONFIG_DB_CONNECTION_STRING,
      clientOption
    );
    return configDbConnection;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  initConfigDBConnection,
};
