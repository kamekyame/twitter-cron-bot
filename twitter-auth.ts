import "./env.ts";

// get env
const consumerKey = Deno.env.get("API_KEY");
if (!consumerKey) throw new Error("API_KEY not set");
const consumerSecret = Deno.env.get("API_SECRETKEY");
if (!consumerSecret) throw new Error("API_SECRETKEY not set");
const token = Deno.env.get("TOKEN");
if (!token) throw new Error("TOKEN not set");
const tokenSecret = Deno.env.get("TOKEN_SECRET");
if (!tokenSecret) throw new Error("TOKEN_SECRET not set");
