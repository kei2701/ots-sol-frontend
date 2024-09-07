import { InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";

function CustomTextField(props) {
  const {
    variant = "outlined",
    backgroundColor,
    label,
    name,
    value,
    placeholder,
    disabled = false,
    onChange,
    error = null,
    children,
    type = "text",
    startIcon,
    endIcon,
    autoComplete = "false",
    placeHolderColor,
    width,
    border,
    borderRadius,
    ...others
  } = props;

  return (
    <TextField
      variant={variant}
      label={label}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      sx={{
        width: width,
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: border,
          },
        },
      }}
      slotProps={{
        input: {
          sx: {
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
            "& .MuiInputBase-input::placeholder": {
              color: placeHolderColor,
              opacity: 1,
            },
          },
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
          endAdornment: endIcon && (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ),
          height: "100%",
        },
      }}
      autoComplete={autoComplete}
      {...(error && { error: true, helperText: error })}
      {...others}
    >
      {children}
    </TextField>
  );
}

CustomTextField.propTypes = {
  variant: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  error: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  autoComplete: PropTypes.string,
  backgroundColor: PropTypes.string,
  placeHolderColor: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default CustomTextField;
