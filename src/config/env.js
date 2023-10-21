require('dotenv').config();

const sanitize = () => {
  const env = {
    PORT:        process.env.PORT,
    DB_PORT:     process.env.DB_PORT,
    DB_NAME:     process.env.DB_NAME,
    DB_USER:     process.env.DB_USER,
    DB_PASS:     process.env.DB_PASS,
    DEVELOPMENT: process.env.NODE_ENV === 'development'
  }

  for (const variable in env) {
    if (!env[variable]) {
      if (env.DEVELOPMENT) {
        console.warn(`Warning: Missing variable ${ variable } in environment.`);
      } else {
        throw new Error(`Error: Missing variable ${ variable } in environment.`);
      }
    }

    const value = env[variable];
    if (value && typeof value === 'string' && !isNaN(value)) env[variable] = Number(value);
  }

  return env;
}

exports.env = sanitize();
