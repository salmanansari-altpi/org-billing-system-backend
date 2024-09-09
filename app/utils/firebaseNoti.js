import admin from "./firebase.js";

export const sendNotification = async (deviceToken, title, body) => {
  const message = {
    notification: {
      title,
      body,
    },
    token: deviceToken,
  };

  const response = admin
    .messaging()
    .send(message)
    .then((res) => {
      return {
        sucess: true,
        response: res,
      };
    })
    .catch((err) => {
      // console.log(err);
      return {
        sucess: false,
        response: err,
      };
    });

  return response;
};
