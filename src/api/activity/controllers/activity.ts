import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::activity.activity",
  ({ strapi }) => ({
    async findOne(ctx) {
      console.log('1');
      await this.validateQuery(ctx);
      console.log('2');
      const populate = ctx.query.populate as unknown;
      console.log('3');
      const locale = ctx.query.locale as string | undefined;
      console.log('4');
      const { id } = ctx.params;
      console.log('5');
      const results = (await strapi.db.query("api::activity.activity").findOne({
        where: { slug: id },
        select: ["documentId"],
      })) as
        | {
            documentId: string | undefined;
          }
        | undefined;
        console.log('6');
      if (results?.documentId) {
        const document = await strapi
          .documents("api::activity.activity")
          .findOne({
            documentId: results.documentId,
            populate: populate,
            locale: locale ?? "en",
          });
          console.log('7');
        const sanitizedDocument = await this.sanitizeOutput(document, ctx);
        console.log('8');

        return this.transformResponse(sanitizedDocument);
      } else {
        const sanitizedResults = await this.sanitizeOutput(results, ctx);
        console.log('9');

        return this.transformResponse(sanitizedResults);
      }
    },
  })
);
