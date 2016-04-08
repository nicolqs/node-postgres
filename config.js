var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/aol-user';

module.exports = connectionString;