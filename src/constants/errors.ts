export const TWEET_MUST_INCLUDE_HL_TEXT =
  'Your tweet must include the word "horse.link" to register for the competition';

export const ALREADY_REGISTERED_TEXT =
  "You have already successfully registered for the competition";

export const ErrorMapping: Record<string, string> = {
  "Tweet content does not contain any links": TWEET_MUST_INCLUDE_HL_TEXT,
  'Tweet content does not contain "horse.link"': TWEET_MUST_INCLUDE_HL_TEXT,
  "Invalid tweet url": TWEET_MUST_INCLUDE_HL_TEXT,
  "Could not get oembed data":
    "Could not load the tweet, make sure that the tweet is public",
  "User already exists": ALREADY_REGISTERED_TEXT,
  "Wallet already exists": ALREADY_REGISTERED_TEXT
};
