'use strict';

/**
 * test-db service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-db.test-db');
