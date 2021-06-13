import React from "react";
import { Slider, Input, Typography, Grid } from "@material-ui/core";

interface SliderInputProps {
  label: string;
  id: string;
  maxValue: number;
  value: number | string | (string | number)[];
  onChange: (newValue: number | string | Array<number | string>) => void;
  [x:string]: any;
}

export const SliderInput = ({
  label = "",
  id = "input-slider",
  maxValue,
  value,
  onChange,
  ...rest
}: SliderInputProps) => {
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    onChange(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      onChange(0);
    } else if (value > maxValue) {
      onChange(maxValue);
    }
  };

  const sliderStep = maxValue / 100;
  const inputStep = maxValue / 50;

  return (
    <div {...rest}>
      {label && (
        <Typography id={id} gutterBottom>
          {label}
        </Typography>
      )}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            step={sliderStep}
            onChange={handleSliderChange}
            aria-labelledby={id}
            max={maxValue}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: inputStep,
              min: 0,
              max: maxValue,
              type: "number",
              "aria-labelledby": id,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};
