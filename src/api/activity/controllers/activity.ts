import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::activity.activity",
  ({ strapi }) => ({
    async findOne(ctx) {
      await this.validateQuery(ctx);
      const { id } = ctx.params;
      const results = await strapi.db.query("api::activity.activity").findOne({
        where: { slug: id },
      });
      const sanitizedResults = await this.sanitizeOutput(results, ctx);

      return this.transformResponse(sanitizedResults);
    },
  })
);
