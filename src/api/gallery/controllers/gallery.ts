import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::gallery.gallery",
  ({ strapi }) => ({
    async findOne(ctx) {
      await this.validateQuery(ctx);
      const populate = ctx.query.populate as unknown;
      const locale = ctx.query.locale as string | undefined;
      const { id } = ctx.params;
      const results = (await strapi.db.query("api::gallery.gallery").findOne({
        where: { slug: id },
        select: ["documentId"],
      })) as
        | {
            documentId: string | undefined;
          }
        | undefined;
      if (results?.documentId) {
        const document = await strapi
          .documents("api::gallery.gallery")
          .findOne({
            documentId: results.documentId,
            populate: populate,
            locale: locale ?? "en",
          });
        const sanitizedDocument = await this.sanitizeOutput(document, ctx);

        return this.transformResponse(sanitizedDocument);
      } else {
        const sanitizedResults = await this.sanitizeOutput(results, ctx);

        return this.transformResponse(sanitizedResults);
      }
    },
  })
);
