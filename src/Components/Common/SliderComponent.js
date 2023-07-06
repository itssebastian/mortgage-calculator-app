import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
  defaultValue,
  min,
  max,
  label,
  unit,
  onChange,
  amount,
  value,
  steps,
}) => {
  return (
    <Stack my={1.4}>
      <Typography varient="subtitle2">{label}</Typography>
      <Typography varient="h5">
        {unit} {amount}
      </Typography>
      <Slider
        color="secondary"
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={onChange}
        aria-label="Default"
        valueLabelDisplay="auto"
        value={value}
        steps={steps}
      />
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SliderComponent;
