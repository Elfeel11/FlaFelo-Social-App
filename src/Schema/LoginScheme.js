import * as zod from "zod"


export const loginScheme = zod.object({
  email: zod.string()
        .nonempty('email is requried')
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "invalid email"),
  password: zod.string()
        .nonempty('password is requried')
        .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "password must be Minimum eight characters, at least one letter, one number and one special character"),

})