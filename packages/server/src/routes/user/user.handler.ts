// import { db } from "@/db.ts";
// import { AppRouteHandler } from "@/lib/types.ts";
// import type { Context } from "hono";
// import * as HttpStatusCodes from "stoker/http-status-codes";
// import * as HttpStatusPhrases from "stoker/http-status-phrases";
// import { eq } from "drizzle-orm";


// import type {
//   CreateRoute,
//   GetOneRoute,
//   ListRoute,
//   PatchRoute,
//   RemoveRoute,
// } from "@/routes/user/user.route.ts";
// import { usersTable } from "../../db/schema.ts";
// import { ZOD_ERROR_CODES, ZOD_ERROR_MESSAGES } from "@/lib/constants.ts";

// export const list: AppRouteHandler<ListRoute> = async (c: Context) => {
//   const usersAll = await db.query.usersTable.findMany();
//   return c.json(usersAll);
// };

// export const getOne: AppRouteHandler<GetOneRoute> = async (c) => {
//   const { id } = c.req.valid("param");
//   //TODO:fix this using proper id
//   const oneUser = await db.query.usersTable.findFirst({
//     where: eq(usersTable.id, id),
//   });

//   if (!oneUser) {
//     return c.json(
//       {
//         message:
//           ` ${HttpStatusPhrases.NOT_FOUND} there is no user with that ID please try another ID `,
//       },
//       HttpStatusCodes.NOT_FOUND,
//     );
//   }

//   return c.json(oneUser, HttpStatusCodes.OK);
// };

// export const remove: AppRouteHandler<RemoveRoute> = async (c) => {
//   const id = c.req.valid("param");
//   const deletedRows = await db
//     .delete(usersTable)
//     .where(eq(usersTable.id, id))
//     .returning();

//   if (deletedRows.length === 0) {
//     return c.json(
//       { success: false, message: "User not found" },
//       HttpStatusCodes.NOT_FOUND,
//     );
//   }

//   return (
//     c.json({
//       success: true,
//       rowsAffected: deletedRows.length,
//       message: `Successfully deleted ${deletedRows.length} row(s)`,
//     }), c.body(null, HttpStatusCodes.NO_CONTENT)
//   );
// };

// export const patch: AppRouteHandler<PatchRoute> = async (c) => {
//   const { id } = c.req.valid("param");
//   const updates = c.req.valid("json");

//   if (Object.keys(updates).length === 0) {
//     return c.json(
//       {
//         success: false,
//         error: {
//           issues: [
//             {
//               code: ZOD_ERROR_CODES.INVALID_UPDATES,
//               path: [],
//               message: ZOD_ERROR_MESSAGES.NO_UPDATES,
//             },
//           ],
//           name: "ZodError",
//         },
//       },
//       HttpStatusCodes.UNPROCESSABLE_ENTITY,
//     );
//   }

//   const [task] = await db
//     .update(usersTable)
//     .set(updates)
//     .where(eq(usersTable.id, id))
//     .returning();

//   if (!task) {
//     return c.json(
//       {
//         message: HttpStatusPhrases.NOT_FOUND,
//       },
//       HttpStatusCodes.NOT_FOUND,
//     );
//   }

//   return c.json(task, HttpStatusCodes.OK);
// };
