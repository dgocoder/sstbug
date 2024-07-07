import { Hono } from "hono";
import Stripe from "stripe";

const app = new Hono();

app.use("*", async (c, next) => {
  const stripe = new Stripe(c.env.STRIPE_SECRET_KEY, {
    apiVersion: "2024-06-20",
  });
  c.set("stripe", stripe);
  next();
});

export default app;
