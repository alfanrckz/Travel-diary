import * as joi from "joi";
import { IRegister } from "../../types/app";

export const authUtils = joi.object<IRegister>({
  email: joi.string().email().required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  phone: joi.string().required(),
  fullname: joi.string().required(),
});