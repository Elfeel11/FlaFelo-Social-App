import { addToast, Button, Input, Select, SelectItem, useAlert } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useActionState, useState } from "react";
import { useForm } from "react-hook-form";
import { registerApi } from "../Services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { registerScheme } from './../Schema/RegisterScheme';



export default function RegisterPage() {
  const [isloading, setisloading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const [succMsg, setsuccMsg] = useState("");
  const navigate = useNavigate()


  const {
    handleSubmit,
    register,
    formState: { errors }, reset
  } = useForm({
    defaultValues: {
      dateOfBirth: "",
      email: "",
      gender: "",
      name: "",
      password: "",
      rePassword: "",
    },
    resolver: zodResolver(registerScheme),
    mode: "onBlur"
  });

  async function HndleRegister(formdata) {
    seterrMsg("")
    setsuccMsg("")
    setisloading(true);
    const data = await registerApi(formdata);
    setisloading(false);

    if (data.error) {
      seterrMsg(data);
      setsuccMsg("");
      addToast({ message: data.error,
         Color: "danger",
         timeout: 2000 });
    } else {
      reset()
      seterrMsg("");
      setsuccMsg(data.message);
      setTimeout(() => {
        navigate("/login")
      },1000)
      addToast({ message: "Registered Successfully, Please Login",
         Color: "success",
         timeout: 2000 });
    }
  };



  return (
    <div className=" max-w-md shadow-2xl rounded-4xl mx-auto my-4 px-4 py-4 bg-white/90  ">
      <form onSubmit={handleSubmit(HndleRegister)}>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-3xl font-bold text-red-950 text-center mb-3"> {" "}  Register Page </h1>

          <Input isInvalid={Boolean(errors.name?.message)} errorMessage={errors.name?.message} variant="bordered"  label="Name" {...register("name")} type="name" />
          <Input isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} variant="bordered" label="Email" {...register("email")} type="email" />
          <Input isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} variant="bordered" label="Password" {...register("password")} type="password" />
          <Input isInvalid={Boolean(errors.rePassword?.message)} errorMessage={errors.rePassword?.message} variant="bordered" label="Confirm Password" {...register("rePassword")} type="password" />
          <Input isInvalid={Boolean(errors.dateOfBirth?.message)} errorMessage={errors.dateOfBirth?.message} variant="bordered" label="Date Of Birth" {...register("dateOfBirth")} type="date" />
          <Select isInvalid={Boolean(errors.gender?.message)} errorMessage={errors.gender?.message} variant="bordered" label="Your Gender" {...register("gender")} >
            <SelectItem key={"male"}>Male</SelectItem>
            <SelectItem key={"female"}>Female</SelectItem>
          </Select>
          <Button className="text-xl font-bold text-red-950 isLoading={isloading} " type="submit"  color="default"  variant="bordered" >
            Register
          </Button>
          {/* {errMsg && <p className="text-1xl text-red-800 bg-red-400/60 text-center rounded-2xl py-3"> {errMsg} </p>}
          {succMsg&& <p className="text-1xl  bg-green-400 text-center rounded-2xl py-3"> {succMsg} </p>} */}
          <p className=" text-red-950">Already have an account? <Link className="text-red-600"  to={"/login"}> Login Now </Link> </p>
          
        </div>
      </form>
    </div>
  );
}
