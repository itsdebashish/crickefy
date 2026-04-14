"use client"
import ButtonTypes from "@/types/Button";

export const Button = (props: ButtonTypes) => {
  return (
    <button className="pl-3 pr-3 p-2 shadow hover:bg-blue-400 hover:text-white border hover:shadow-xl shadow-blue-300 font-thin  rounded-sm" onClick={props.action}>
      {props.title}
    </button>
  )
}
