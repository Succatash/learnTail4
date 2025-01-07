import { apiReference } from '@scalar/hono-api-reference'

import type { AppOpenAPI } from "./types.ts";

import packageJSON from "../../deno.json" with { type: "json" };

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.2",
    info: {
      version: packageJSON.version,
      title: "HasbaraCMS API",
    },
  });

  app.get(
    '/reference',
     apiReference({
      theme: "kepler",
      layout: "classic",
      pageTitle: 'HasbaraCMS API Reference',
      defaultHttpClient: {
        targetKey: "node",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    }),
  )
}