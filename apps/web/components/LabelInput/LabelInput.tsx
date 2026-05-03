import Label from "@/components/Label"
import Input from "@/components/Input";
import LabelInputProps from "@/types/LabelInput";

const LabelInput = (
  {
    name,
    value,
      type,
    onChange,
  }: LabelInputProps
) => {
  return (
    <div className="text-start w-full  flex flex-col justify-start items-start gap-1">
      < Label name={name} />
      < Input value={value} onChange={onChange}  type={type} />
    </div >
  )
};


export { LabelInput };
