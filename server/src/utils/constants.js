require("dotenv").config();
const PORT = process.env.PORT || 8080;
const MONGODB_URL = process.env.MONGODB_URL;

export { PORT, MONGODB_URL };
