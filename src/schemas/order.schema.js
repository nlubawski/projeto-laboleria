import joi from "joi"

export const orderSchema = joi.object({
  clientId: joi.number().required(),
  cakeId: joi.number().required(), 
  quantity: joi.number().integer().greater(0).less(5),
  ttalPrice:joi.number().positive().required()
})