"use client"
import Link from "next/link"
import LabelInput from "@/components/LabelInput";
import {useState} from "react"
import Button from "@/components/Button"
import {loginService} from "@/services/auth.service";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex justify-center items-center min-h-screen min-w-screen">
            <div
                className="flex flex-col border p-10 shadow-md  rounded-md justify-center w-3/5 sm:w-3xl  items-center gap-6 dark:shadow-white" style={{"boxShadow": "5px 5px  white"}}>
                <h1 className=" text-3xl font-serif">Welcome Back </h1>
                <LabelInput name="username or email" value={email} onChange={setEmail}/>
                <LabelInput name="password" type="password" value={password} onChange={setPassword}/>
                <Button  title="Log In" action={() => loginService(email,password)}/>
                <span className="text-sm">have not Register yet ? <Link href="/register"
                                                                        className="text-blue-700 font-serif font-semibold">register</Link> here!</span>
            </div>
        </div>
    )
};

export default LoginPage;
