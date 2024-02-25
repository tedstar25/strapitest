'use strict';

/**
 * test-db controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-db.test-db');
