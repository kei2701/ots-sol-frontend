import { Button, useTheme } from "@mui/material";
import PropTypes from "prop-types";

function CustomButton(props) {
  const theme = useTheme();
  const {
    variant,
    children,
    width,
    height,
    borderRadius = theme.spacing(1),
    padding = theme.spacing(1.5, 1),
    textTransform = "none",
    fontSize,
    backgroundColor,
    fontWeight,
    ...others
  } = props;
  return (
    <Button
      variant={variant}
      {...others}
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        backgroundColor: backgroundColor,
        fontWeight: fontWeight,
        borderRadius: borderRadius,
        padding: padding,
        textTransform: textTransform,
      }}
    >
      {children}
    </Button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  textTransform: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default CustomButton;
