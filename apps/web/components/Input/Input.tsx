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
        className="border w-full focus:outline-none  border-gray-400 focus:shadow-md shadow-md dark:shadow-white pl-3 pr-1 p-1 rounded-xl " />
    </div>
  )

}


export { Input };
