require("dotenv").config();
const ApiError = require("../utils/ApiError");
const envVarSchema = require("../validation/envvarschema.validation");
const httpStatus = require("http-status");

const config = {
  DB_CONNECTION: process.env.DB_CONNECTION,
  PORT: Number(process.env.PORT),
  NODE_ENV: process.env.NODE_ENV
};

const { error, value } = envVarSchema.validate(config);

if (error) {
  throw new ApiError(
    httpStatus.BAD_REQUEST,
    `Config validation error: ${error.message}`
  );
}

module.exports = {
  dbConnection: value.DB_CONNECTION,
  port: value.PORT,
  db_name: value.DB_NAME,
  nodeEnv: value.NODE_ENV,
  email: value.EMAIL,
  emailpassword: value.EMAIL_PASSWORD,
  jwt: {
    secret: value.JWT_SECRET,
    accessTokenExpiry: value.ACCESS_TOKEN_EXPIRY,
    refreshTokenExpiry: value.REFRESH_TOKEN_EXPIRY
  },
  ratelimiter: {
    maxAttmptIpUsername: value.MAX_ATTEMPT_IP_USERNAME,
    maxAttemptperDay: value.MAX_ATTEMPT_PER_DAY,
    maxAttemptemailperday: value.MAX_ATTEMPT_EMAIL_PER_DAY
  },
  redis: {
    port: value.REDIS_PORT,
    host: value.REDIS_HOST
  }
};