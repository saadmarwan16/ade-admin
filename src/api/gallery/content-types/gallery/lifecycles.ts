import slugify from "slugify";

export default {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.title && typeof data.title === "string") {
      data.slug = slugify(data.title, { lower: true });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    console.log("Updated data:", data);
    if (data.title && typeof data.title === "string") {
      data.slug = slugify(data.title, { lower: true });
    }
  },
};
