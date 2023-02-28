import MenuItem from "@src/components/Basic/Menu/MenuItem";
import Input from "@src/components/Basic/Input/input";
function MySelect({ value, onChange, options, label }) {
  return (
    <Input select value={value} onChange={onChange} label={label}>
      {Array.isArray(options)
        ? options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))
        : Object.keys(options).map((key) => (
            <MenuItem key={key} value={key}>
              {options[key]}
            </MenuItem>
          ))}
    </Input>
  );
}

export default MySelect;
