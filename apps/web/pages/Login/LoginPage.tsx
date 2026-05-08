"use client"
import Link from "next/link"
import LabelInput from "@/components/LabelInput";
import {useState} from "react"
import  {FullButton} from "@/components/Button"
import {loginService} from "@/services/auth.service";
import {FcGoogle} from "react-icons/fc";

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex justify-center items-center bg-[#FDFDFD] min-h-screen min-w-screen">
            <div
                className="flex flex-col  p-10 shadow-sm  bg-white rounded-xl justify-center  w-4/5    items-center gap-5 border-gray-300 border" style={{"width" : "28rem"}}>
                <div className="pb-8 flex flex-col justify-center items-center">
                <h1 className="text-xl font-semibold">Crickefy</h1>
                <span className="text-gray-500">Welcome Back to Crickefy!</span>
                </div>
                <div className="w-full flex">
                    <button
                        className="w-full bg-black text-white  text-center flex justify-center items-center gap-2 rounded-xl text-sm p-2 border ">
                        <FcGoogle/>
                        Sign in With Google
                    </button>
                </div>
                <div className="flex gap-2 justify-center pl-4 pr-4 w-full items-center">
                    <span className="w-full bg-gray-200 h-0.5"></span>
                    <span className="font-mono text-sm">or</span>
                    <span className="w-full bg-gray-200 h-0.5"></span>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <LabelInput name="Email" value={email} onChange={setEmail}/>
                    <LabelInput name="Password" type="password" value={password} onChange={setPassword}/>
                    <FullButton title="Conitnue" action={() => loginService(email, password)}/>
                </div>
                <div className="pt-4">
                <span className="text-sm">have not Register yet ? <Link href="/register"
                                                                        className="text-blue-700 font-serif font-semibold">register</Link> here!</span>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;
