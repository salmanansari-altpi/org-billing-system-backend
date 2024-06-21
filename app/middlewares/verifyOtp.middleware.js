import jwt from "jsonwebtoken";

export const verifyOTPToken = async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader) {
    token = authHeader.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ success: true, message: "No token found!" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err) {
        return res
          .status(401)
          .json({ success: true, message: "Unauthorized!" });
      }
      req.user = data;
      next();
    });
  } else {
    return res.status(401).json({
      success: true,
      message: "Unauthorized: Missing or invalid token!",
    });
  }
};
