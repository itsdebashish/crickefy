import LabelType from "@/types/Label"


export const Label = (props: LabelType) => {
  return (
    <h3>
      {
        props.name
      }
    </h3>
  )
};

