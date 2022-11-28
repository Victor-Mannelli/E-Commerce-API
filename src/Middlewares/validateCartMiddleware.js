import { checkoutSchema, productIdSchema, productSchema } from "../Models/cartSchema.js";

export function validateProduct(req, res, next) {
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  if (error) {
    const errorList = error.details.map(detail=>detail.message)
    return res.status(422).send(errorList); // unprocessable entity
  }

  next();
}

export function validateProductId(req, res, next) {
    const { error } = productIdSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorList = error.details.map(detail=>detail.message)
      return res.status(422).send(errorList); // unprocessable entity
    }
  
    next();
  }

  export function validateCheckout(req, res, next) {
    const { error } = checkoutSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorList = error.details.map(detail=>detail.message)
      return res.status(422).send(errorList); // unprocessable entity
    }
  
    next();
  }