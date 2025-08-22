import * as zod from "zod"
export const registerScheme = zod.object({
  name: zod.string()
      .nonempty('name is requried')
      .min(3, " Name is must be at least 3 characters long")
      .max(20, " Name is must be at most 20 characters long"),
  email: zod.string()
        .nonempty('email is requried')
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email"),
  password: zod.string()
        .nonempty('password is requried')
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "password must be Minimum eight characters, at least one letter, one number and one special character"),
  rePassword: zod.string(),
      
  dateOfBirth: zod.coerce.date().refine((data)=> {
    const birthDate = data.getFullYear();
    const now = new Date().getFullYear();
    const age = now - birthDate;
    return age >= 18
  },{message: "you must be at least 18 years old"}),

  gender: zod.string()
    .nonempty('gender is requried')
    // .regex(/^(Male|Female)$/, "enter valid gender")
  
}).refine((data) => data.password === data.rePassword, {message: " confirm password and password must be matched ", path: ['rePassword']})
