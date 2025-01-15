import { rateLimiter } from "@hono-rate-limiter/hono-rate-limiter";
import type { Context, Next } from "hono";

type PlanConfig = {
  max: number;
  window: number;
};

type PlanConfigs = {
  enterprise: PlanConfig;
  pro: PlanConfig;
  free: PlanConfig;
};

// Create middleware function instead of instantiating RateLimiter directly
export const createRateLimiter = (plan: string) => {
  const config: PlanConfigs = {
    enterprise: { max: 1000, window: 60000 },
    pro: { max: 500, window: 60000 },
    free: { max: 100, window: 60000 },
  };

  const planConfig = plan in config
    ? config[plan as keyof PlanConfigs]
    : config.free;

  // Return the middleware function directly
  return function rateLimiterMiddleware(c: Context, next: Next) {
    const limiter = {
      max: planConfig.max,
      window: planConfig.window,
      headers: true,
      key: `${c.get("tenant").id}:${c.req.url}`,
    };

    return rateLimiter(limiter)(c, next);
  };
};
