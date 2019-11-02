require('dotenv').config()

module.exports = {
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
  apiUrl: process.env.API_URL || "http://localhost:8000"
}