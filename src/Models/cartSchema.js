import joi from "joi";

export const productSchema = joi.object({
  product: joi.object().required(),
  quantity: joi.number().required(),
});

export const productIdSchema = joi.object({
  productId: joi.string().required(),
});

export const checkoutSchema = joi.object({
  userInfo: joi.object({
    personalInfo: joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
    }),
    shippingInfo: joi.object({
      country: joi.string().required(),
      zipcode: joi.string().required(),
      address: joi.string().required(),
      city: joi.string().required(),
      complement: joi.string(),
    }),
    paymentInfo: joi.object({
      creditCardNumber: joi.string().required(),
      creditCardName: joi.string().required(),
      creditCardExpirationDate: joi.date().greater('now').required(),
      cardSecurityCode: joi.number().max(9999).required(),
    }),
  }),
  orderTotal: joi.number().required(),
  orderItems: joi.object().required(),
});