import * as jwt from "jsonwebtoken";
import prisma from "../db";
import bcrypt from "bcrypt";
import { authUtils } from "../libs/validation/authUtils";
import { IRegister } from "../types/app";

export const loginService = async (
    email: string,
    password: string
  ): Promise<string> => {
    const user = await prisma.users.findFirst({
      where: {
        email,
      },
    });
  
    if (!user) {
      throw new Error("username or password not valid");
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      throw new Error("Username or password not valid");
    }
  
    const payload = { id: user.id };
    const token = jwt.sign(payload, "secret", {
      expiresIn: "1d",
    });
    return token;
  };

  export const registerService = async (payload: IRegister) => {
    const { error, value } = authUtils.validate(payload);
    if (error) {
      throw new Error(error.details[0].message);
    }
    console.log("value :",value)
  
    const isExist = await prisma.users.findFirst({
      where: {
        email: value.email,
      },
    });
  console.log(isExist)
    if (isExist) {
      throw new Error("username or email already exist");
    }
  
    const hash = await bcrypt.hash(value.password, 10);
  
    value.password = hash;
  const user = await prisma.users.create({
    data:{
      ...value,
    }
  })
    // const user = await prisma.users.create({
    //   ...value,
    // });
  console.log("user :",user)
    // const profile = await prisma.profiles.create({
    //   data: {
    //     userId: user.id,
    //   },
    // });
    // console.log("first profile :",profile)
  
    return { user };
  };