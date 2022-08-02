const Joi = require('joi');

module.exports.campgroundSchema = Joi.object({
  campgorund: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    img: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
  }).required(),
}); // joi schema 정의
