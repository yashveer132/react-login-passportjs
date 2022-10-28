const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;

const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "628999407498-116ojo3cucr7ep8afekm7tocmft24t04.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "1608925a50332f62dc25";
GITHUB_CLIENT_SECRET = "5f6a62451ae25a297af941484b31fa8127ace984";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
