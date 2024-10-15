import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::gallery.gallery", {
  only: ["findOne"],
  config: {
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
});
