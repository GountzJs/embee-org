import 'dotenv/config';

const env = process.env;

export const debug = env.DEBUG === 'true';
export const {
  TURSO_AUTH_TOKEN: tursoAuthToken = '',
  TURSO_DATABASE_URL: tursoDatabaseUrl = '',
  TWITCH_CLIENT_ID: twitchClientId = '',
  TWITCH_AUTH_TOKEN: twitchAuthToken = '',
  TWITCH_USERNAME: twitchUsername = '',
  TWITCH_CHANNEL: twitchChannel = '',
  TWITCH_API_URL: twitchApiUrl = '',
  BORDER_SPECIAL: borderSpecial = '',
} = env;
