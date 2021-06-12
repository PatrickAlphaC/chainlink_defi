import React, { useState } from "react";
import { Slider, Input, Typography, Grid } from "@material-ui/core";

export const SliderInput = ({
  label = "",
  id = "input-slider",
  maxValue = 100,
  ...rest
}) => {
  const [value, setValue] =
    useState<number | string | Array<number | string>>(0);

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > maxValue) {
      setValue(maxValue);
    }
  };

  const sliderStep = maxValue / 100
  const inputStep = maxValue / 50

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
