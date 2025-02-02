import { apiReference } from "@scalar/hono-api-reference";

import openApiDoc from '../../../openapi.json'   with {type: "json"}
import { OpenAPIHono } from "@hono/zod-openapi";
import defaultHook from "stoker/openapi/default-hook";

//TODO: dynamically added the version later
// import packageJSON from "../../deno.json" with { type: "json" };


export const openApi = new OpenAPIHono({
    strict: false,
    defaultHook,
  });


openApi.doc('/docs', {
  openapi: openApiDoc.openapi,
  info: openApiDoc.info,
});

// openApi.use('/ui', swaggerUI({ url: '/openapi.json' }))

openApi.get('/openapi.json', (c) => {
  return c.json(openApiDoc)
})

openApi.get(
    "/reference",
    apiReference({
      theme: "kepler",
      layout: "classic",
      pageTitle: "HasbaraCMS API Reference",
      defaultHttpClient: {
        targetKey: "node",
        clientKey: "fetch",
      },
      spec: {
        url: "/openapi.json",
        // url:"/docs"
      },
    }),
 
  );





