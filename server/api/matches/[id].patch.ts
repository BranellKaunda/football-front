import { useDrizzle } from "#server/utils/drizzle";
import { defineEventHandler } from "h3";
import { readBody } from "h3";
import { eq } from "drizzle-orm";
import { matches } from "#server/database/schema";
import { matchSchema } from "#server/utils/validation/matchSchema";

const schema = matchSchema.partial();

export default defineEventHandler(async (event) => {
  const db = useDrizzle();
  const body = schema.parse(await readBody(event));
  const id = Number(event.context.params?.id);

  await db
    .update(matches)
    .set({
      ...body,
      matchDate: body.matchDate?.toISOString(),
    })
    .where(eq(matches.id, id));

  return { success: true };
});
