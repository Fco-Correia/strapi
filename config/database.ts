import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres'); // Mantenha 'postgres' como cliente

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'), // Mantenha o uso da variável DATABASE_URL
        host: env('DATABASE_HOST', 'localhost'), // Caso ainda precise
        port: env.int('DATABASE_PORT', 5432), // Caso ainda precise
        database: env('DATABASE_NAME', 'strapi'), // Caso ainda precise
        user: env('DATABASE_USERNAME', 'strapi'), // Caso ainda precise
        password: env('DATABASE_PASSWORD', 'strapi'), // Caso ainda precise
        ssl: {
          rejectUnauthorized: false, // Alterar para false para evitar erros de SSL (para testes)
        },
        schema: env('DATABASE_SCHEMA', 'public'), // Caso ainda precise
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) }, // Pool de conexões
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000), // Timeout para conexão
    },
  };
};
