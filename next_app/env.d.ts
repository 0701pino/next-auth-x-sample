// env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    AUTH_TWITTER_ID: string;
    AUTH_TWITTER_SECRET: string;
  }
}
