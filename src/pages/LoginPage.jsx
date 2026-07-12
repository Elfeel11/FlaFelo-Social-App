import { Button, Input , useToast } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useActionState, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { loginApi } from "../Services/authServices";
import { Link, useNavigate } from "react-router-dom";
import { loginScheme } from "./../Schema/LoginScheme";
import { AuthContext } from "../Contexets/authContext";

export default function loginPage() {
  const [isloading, setisloading] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const navigate = useNavigate();
    const { addToast } = useToast();

  // const errorMsg = "Incorect Email OR Pasword";
  const { setisLoggedin } = useContext(AuthContext);


  const { handleSubmit, register, formState: { errors }} = useForm({
    defaultValues: { 
      email: "",
      password: "" },
      
    resolver: zodResolver(loginScheme),
    mode: "onBlur"  });

  async function HndleLogin(formdata) {
    seterrMsg("");
    setisloading(true);
    const data = await loginApi(formdata);
    setisloading(false);
    if (data.message == "success") {
      localStorage.setItem("token", data.token);
      setisLoggedin(true);
      addToast({ message: "Logged in Successfully",
         color: "success",
         timeout: 2000 });

      navigate("/");
    } else {
      seterrMsg(data);
      addToast({ message: data.error,
         color: "danger",
         timeout: 2000 });
    }
  }

  return (
    <div className=" max-w-md shadow-2xl rounded-4xl mx-auto my-6 px-4 py-8 bg-white/90 ">
      <form onSubmit={handleSubmit(HndleLogin)}>
        <div className="flex flex-col gap-5 ">
          <h1 className="text-3xl font-bold text-red-950 text-center mb-6">
            Login Page
          </h1>
          <Input isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} variant="bordered" label="Email" {...register("email")} type="email" />
          <Input isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} variant="bordered" label="Password" {...register("password")} type="password"/>
          <Button className="text-xl font-bold text-red-950" isLoading={isloading} type="submit" color="default" variant="bordered" >
          Login
          </Button>
          {/* {errMsg && (<p className="text-1xl text-red-800 bg-red-400/60 text-center rounded-2xl py-3">  {errMsg} </p> )} */}
          <p className=" text-red-950"> U don't have an account? <Link className="text-red-600" to={"/register"}> Create Account Now </Link> </p>
        </div>
      </form>
    </div>
  );
}
