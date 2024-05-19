import Joi from "joi";

const postsValidator = Joi
    .object({
        title: Joi
            .string()
            .required()
            .max(160)
            .min(2)
            .messages({
                "string.min.base": "min 2 character",
                "string.max.base": "max 160 character"
            }),
        body: Joi
            .string()
            .required()
            .messages({"string.required": 'Field is required'}),
        userId: Joi
            .number()
            .min(1)
            .max(10)
            .required()
            .messages({
                "number.min": 'minimum 1',
                "number.max": 'minimum 10',
                "number.required":'Can not be empty'
            })
    })

export {postsValidator};