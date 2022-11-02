
var admin = require("firebase-admin");

var serviceAccount = require("../../serviceAccount.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://myproject-3ae01-default-rtdb.firebaseio.com/"
})

module.exports = {admin}