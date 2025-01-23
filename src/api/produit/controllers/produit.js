'use strict';

/**
 * produit controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::produit.produit',    ({ strapi }) => ({

  async findAll(ctx) {
    const query = {
      ...ctx.query,
      publishedAt: { $ne: null },
    };
    const entity = await strapi.db.query("api::produit.produit").findMany({
      filters: query,
      populate: {
        image: {
          fields: ["url", "width", "height", "alternativeText"]
        },
        categories: {
          fields: ["name"]
        }
      }
    });
  
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
  
  async findOne(ctx) {

      const { slug } = ctx.params;
      // const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      const entity = await strapi.db.query("api::produit.produit").findOne({
          where: {
              slug,
          },
          populate: {
              image: {
                  fields: ["url", "width", "height", "alternativeText"],
              },
              // categories: {
              //     fields: ["name"],
              // },
          },
          
      })
      
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);

      ;}}))
