import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::activity.activity", {
  only: ["findOne"],
  config: {
    findOne: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
});
