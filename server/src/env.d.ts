declare namespace NodeJS {
  interface ProcessEnv {
    SESSION_SECRET: string;
    LOG_IN_PASSWORD: string;
    LOG_IN_USERNAME: string;
    NODE_MAILER_PASSWORD: string;
    GMAIL_PASSWORD: string;
    NAME_CHEAP_PASSWORD: string;
    ip: string;
    PORT: string;
    CORS_ORIGIN: string;
  }
}
