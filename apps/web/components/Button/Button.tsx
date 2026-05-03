"use client"
import ButtonTypes from "@/types/Button";

export const Button = (props: ButtonTypes) => {
  return (
    <button style={{"boxShadow":"2px 2px white"}} className="pl-3 pr-3 p-2 shadow hover:bg-white hover:text-black  border hover:shadow-xl shadow-white font-thin  rounded-sm" onClick={props.action}>
      {props.title}
    </button>
  )
}
