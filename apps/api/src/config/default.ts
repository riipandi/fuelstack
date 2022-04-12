export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3030,
  baseUrl: parseInt(process.env.APP_BASE_URL, 10) || 'http://localhost:3030',
  swaggerPath: process.env.SWAGGER_PATH || 'docs',
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.APP_SECRET,
    signOptions: {
      expiresIn: '3600s',
    },
  },
  mailer: {
    host: process.env.SMTP_HOST || 'localhost',
    port: process.env.SMTP_PORT || 1025,
    username: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    from: process.env.MAIL_FROM || 'Admin Sistem <noreply@example.com>',
    secure: process.env.MAIL_SECURE || false, // true for 465, false for other ports
  },
});
