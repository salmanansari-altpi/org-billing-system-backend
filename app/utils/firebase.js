import admin from "firebase-admin";

import serviceAccount from "./pushy-c4c01-firebase-adminsdk-wg6ha-928a89a75c.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
