"use client"
import { useState } from "react"
import LabelInput from "@/components/LabelInput"
import Button from "@/components/Button"
import Link from "next/link"

export const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col border p-10 rounded-md justify-center items-center gap-4 shadow shadow-blue-400">
        <h1 className="text-2xl p-4 pb-6 pt-6">Welcome To Crickefy</h1>
        <LabelInput name="Your Name" type="text" value={name} onChange={setName} />
        <LabelInput name="Email" type="text" value={email} onChange={setEmail} />
        <LabelInput name="Password" type="text" value={password} onChange={setPassword} />
        <Button title="register" action={() => console.log({ name, email, password })} />
        <span className="text-sm">Already register ? <Link href="/login" className="text-red-800">login</Link> here</span>
      </div>
    </div>
  )
}
