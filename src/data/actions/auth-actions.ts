"use server";

import { z } from "zod";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
    loginUserService,
    LoginUserOutput
  } from "@/data/services/auth-service";

const config = {
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
    domain: process.env.HOST ?? "localhost",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  };

  const schemaLogin = z.object({
    identifier: z
      .string()
      .min(3, {
        message: "Identifier must have at least 3 or more characters",
      })
      .max(50, {
        message: "Please enter a valid username or email address",
      }),
    password: z
      .string()
      .min(3, {
        message: "Password must have at least 6 or more characters",
      })
      .max(100, {
        message: "Password must be between 6 and 100 characters",
      }),
  });
  

export async function registerUserAction(formData: FormData) {
  console.log("Hello From Register User Action");
}

export async function loginUserAction(prevState: any, formData: FormData) {
  console.log(formData);

    const validatedFields = schemaLogin.safeParse({
      identifier: formData.get("identifier"),
      password: formData.get("password"),
    });
  
    console.log("validating...")
    if (!validatedFields.success) {
      console.log("error", validatedFields.error.flatten())
      return {
        ...prevState,
        zodErrors: validatedFields.error.flatten().fieldErrors,
        message: "Missing Fields. Failed to Login.",
      };
    }
  
    const responseData : LoginUserOutput = await loginUserService(validatedFields.data);
    
    console.log("responseData:", responseData);
  
    if (!responseData) {
      return {
        ...prevState,
        apiErrors: null,
        zodErrors: null,
        message: "Ops! Something went wrong. Please try again.",
      };
    }
  
    if (responseData.error) {
      return {
        ...prevState,
        strapiErrors: responseData.error,
        zodErrors: null,
        message: "Failed to Login.",
      };
    }

    console.log("everything looks ok");
  
    cookies().set("jwt", responseData.jwt, config);
  
    redirect("/dashboard");
  }
  
  export async function logoutAction() {
    cookies().set("jwt", "", { ...config, maxAge: 0 });
    redirect("/");
  }