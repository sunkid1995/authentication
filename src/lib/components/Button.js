import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: "Click",
};

function Button({ label }) {
  return <button>{label}</button>;
}

export default Button;
