const testSchema = require("./start_test");

module.exports = (connection) => {
  return {
    TestData: connection.model("start_test", testSchema),
  };
};
