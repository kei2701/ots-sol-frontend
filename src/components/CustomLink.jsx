import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)(({ fontWeight, colorhover }) => ({
  textDecoration: "none",
  fontWeight: fontWeight || "bold",
  "&:hover": {
    textDecoration: "none",
    color: colorhover || "",
  },
}));

function CustomLink(props) {
  const { width, height, ...other } = props;
  return (
    <StyledLink
      style={{
        width: width ? width : "",
        height: height ? height : "",
        color: props.color ? props.color : "#141E46",
      }}
      replace={props.replace}
      to={props.to}
      {...other}
    >
      {props.children}
    </StyledLink>
  );
}

CustomLink.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  replace: PropTypes.bool,
  to: PropTypes.string,
  colorhover: PropTypes.string,
  fontWeight: PropTypes.string,
};

export default CustomLink;
