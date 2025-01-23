'use strict';

/**
 * ligne-de-commande service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ligne-de-commande.ligne-de-commande');
