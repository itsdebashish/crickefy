"use client"
import Button from "@/components/Button";

export default function Page() {
    return (
        <div className="w-full max-w-5xl p-10 flex justify-center gap-2 items-center flex-col" >
            <h1 className="text-3xl">Welcome To Crickefy</h1>
            <p>The Ultimate Cricket Match System</p>
            <div className="flex gap-6">

            <Button title="Log In" action={() => console.log("trying to login")} />
                <Button title="Get Started" action={() => console.log("Get Started")} />
            </div>
        </div>
    )
}