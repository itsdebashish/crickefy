"use client"
import ButtonTypes from "@/types/Button";

export const FullButton = (props: ButtonTypes) => {
    return (
        <button style={{"boxShadow":"2px 2px white"}} className="pl-3 w-full pr-4 p-2 bg-black dark:bg-white dark:text-black text-white shadow hover:bg-white hover:text-black  border hover:shadow-xl shadow-white text-sm  rounded-xl" onClick={props.action}>
            {props.title}
        </button>
    )
}
