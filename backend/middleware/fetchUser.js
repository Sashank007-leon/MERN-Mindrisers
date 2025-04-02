import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET_KEY;

const fetchUser = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  // Extract only the token (remove "Bearer ")
  const token = authHeader.split(" ")[1];

  try {
    const data = jwt.verify(token, secret);
    req.user = data; // Store user details in request object
    next(); // Proceed to the next middleware/controller
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default fetchUser;