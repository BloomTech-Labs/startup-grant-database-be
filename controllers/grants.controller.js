const axios = require('axios');
const Grants = require('../models/grant.model');
const modifiedUrl = require('../data/helpers/modifyUrl');

async function allGrants(req, res, next) {
  try {
    const grants = await Grants.find();
    res.json(grants);
  } catch (error) {
    next(error);
  }
}

async function findGrantById(req, res, next) {
  const { id } = req.params;
  try {
    const grant = await Grants.findBy({ id });
    if (grant.length > 0) {
      res.json(grant[0]);
    } else {
      res.status(404).json({ message: `Grant with id:${id} was not found` });
    }
  } catch (error) {
    next(error);
  }
}

async function addGrant(req, res, next) {
  try {
    const logo = `https://logo.clearbit.com/${modifiedUrl(
      req.body.website
    )}?size=75`;
    const [newGrant] = await Grants.add({ ...req.body, logo });
    const grants = await Grants.find();
    const grantsAdmin = await Grants.findAdmin();
    res.status(201).json({ grants, grantsAdmin, newGrant });
  } catch (error) {
    next(error);
  }
}

async function whichLogoToUse(req, res, next) {
  const grants = await Grants.findAdmin();
  const selectedGrants = grants.filter(grant => grant.use_logo === null);
  selectedGrants.forEach(async grant => {
    try {
      await axios.get(grant.logo);
      await Grants.update(grant.id, { use_logo: true });
    } catch (error) {
      await Grants.update(grant.id, { use_logo: false });
    }
  });
  next();
}

function checkUrl(req, res, next) {
  const { website } = req.body;
  if (!website) {
    return res.status(400).json({ message: 'Website is Required' });
  }
  try {
    const newUrl = new URL(website);
    next();
  } catch {
    req.body = {...req.body, use_logo: false}
    next()
  }
}

module.exports = {
  findGrantById,
  allGrants,
  addGrant,
  whichLogoToUse,
  checkUrl,
};

/**
 * @apiDefine GrantNotFound
 * @apiError {json} Grant Not Found
 * @apiErrorExample {json} Error-Response:
 * {
 *   "message": "Grant with id:1 was not found"
 * }
 */

/**
 * @api {get} /api/grants Get All Grants
 * @apiName All Grants
 * @apiGroup Grants
 * @apiPermission none
 * @apiDescription Public
 * @apiSuccess {json} grants An Array of all grants that have been reviewed
 */

/**
 *  @api {get} /api/grants/:id Get Grant By Id
 *  @apiUse GrantNotFound
 *  @apiName Grant By Id
 *  @apiGroup Grants
 *  @apiPermission none
 *  @apiDescription Public
 *  @apiParam {integer} id Grant Id
 *  @apiSuccess {json} grant The grant with the provided id
 */

/**
 *  @api {post} /api/grants Add Grant
 *  @apiName Add Grant
 *  @apiGroup Grants
 *  @apiPermission token
 *  @apiDescription Requires token
 *  @apiHeader {String} token Users AccessToken from Auth0
 *  @apiHeaderExample {json} Sample-Header:
 *  {
 *    "Content-Type": "application/json",
 *    "authorization": "Bearer token"
 *  }
 *  @apiParam {String} competition_name Competition Name
 *  @apiParam {String} area_focus Area Focus
 *  @apiParam {String} sponsoring_entity Sponsoring Entity
 *  @apiParam {String} website Grant Website *Required
 *  @apiParam {Date} most_recent_application_due_date Application Due Date
 *  @apiParam {Integer} amount Grant Amount
 *  @apiParam {String} amount_notes Grant Amount Notes
 *  @apiParam {String} geographic_region Grant Geographic Region
 *  @apiParam {String} target_entrepreneur_demographic Target Demographic
 *  @apiParam {String} notes Grant Notes
 *  @apiParam {Boolean} early_stage_funding Early Stage Funding
 *  @apiParam {Date} details_last_updated Last Update of Grant
 *  @apiSuccess {json} grant The newly created Grant
 */
