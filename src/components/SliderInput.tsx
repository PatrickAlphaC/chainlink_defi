import React from "react";
import { Slider, Input, Typography, Grid, makeStyles } from "@material-ui/core";

interface SliderInputProps {
  label?: string;
  id?: string;
  maxValue: number;
  value: number | string | (string | number)[];
  onChange: (newValue: number | string | Array<number | string>) => void;
  disabled?: boolean;
  [x: string]: any;
}

const useStyles = makeStyles((theme) => ({
  inputsContainer: {
    display: "grid",
    alignItems: "center",
    gap: theme.spacing(2),
    gridTemplateRows: "auto",
    gridTemplateColumns: "1fr auto",
  },
  slider: {},
}));

export const SliderInput = ({
  label = "",
  id = "input-slider",
  maxValue,
  value,
  onChange,
  disabled = false,
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

  const classes = useStyles();

  return (
    <div {...rest}>
      {label && (
        <Typography id={id} gutterBottom>
          {label}
        </Typography>
      )}
      <div className={classes.inputsContainer}>
        <div>
          <Slider
            value={typeof value === "number" ? value : 0}
            step={sliderStep}
            onChange={handleSliderChange}
            aria-labelledby={id}
            max={maxValue}
            disabled={disabled}
          />
        </div>
        <div>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            disabled={disabled}
            inputProps={{
              step: inputStep,
              min: 0,
              max: maxValue,
              type: "number",
              "aria-labelledby": id,
            }}
          />
        </div>
      </div>
    </div>
  );
};
