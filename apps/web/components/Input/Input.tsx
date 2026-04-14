import InputType from "@/types/Input"

const Input = ({
  value,
  onChange,
  placeholder,
  type = 'text',

}: InputType) => {
  return (
    <div className="w-full">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="border w-full focus:outline-none border-blue-899 focus:shadow-sm shadow-blue-400 pl-1 pr-1 p-1 rounded-md " />
    </div>
  )

}


export { Input };
