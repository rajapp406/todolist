
import DropDownUI from "../controls/dropdown";
interface StatusOptions<T, X>{
  key : T
  value: X
}
export default function DropDownStatus({ selection, onStatusChange }) {
  const options: StatusOptions<string, string>[] = [
    { key: "-1", value: "Select" },
    { key: "pending", value: "Pending" },
    { key: "completed", value: "Completed" },
    { key: "canceled", value: "Canceled" },
  ];
  if (!selection) {
    selection = options[0];
  }
  const onChange = (e) => {
    onStatusChange(e);
  };
  return (
    <DropDownUI
      selection={selection}
      title={"Status"}
      options={options}
      onChange={onChange}
    />
  );
}
