export default interface Input {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string
}
