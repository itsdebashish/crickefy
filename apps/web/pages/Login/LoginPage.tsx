"use client"
import Link from "next/link"
import LabelInput from "@/components/LabelInput";
import { useState } from "react"
import Button from "@/components/Button"

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen">
      <div className="flex flex-col border p-10 rounded-md justify-center w-3/5 sm:w-3xl  items-center gap-6 shadow shadow-blue-400">
        <h1 className=" text-3xl font-serif text-blue-900">Welcome Back </h1>
        <LabelInput name="username or email" value={email} onChange={setEmail} />
        <LabelInput name="password" value={password} onChange={setPassword} />
        <Button title="Log In" action={() => console.log({ email, password })} />
        <span className="text-sm">have not Register yet ? <Link href="register" className="text-red-700 font-serif font-semibold">register</Link> here!</span>
      </div>
    </div>
  )
};

export { LoginPage };
