import React from "react";
import PropTypes from "prop-types";

TextInput.propTypes = {
  label: PropTypes.string,
  inputName: PropTypes.string,
};

function TextInput(props) {
  return (
    <div className="mb-5">
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <input
        type="text"
        name={props.inputName}
        id={props.inputName}
        placeholder={props.inputName ?? "name"}
        className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
        ref={props.innerRef}
      />
    </div>
  );
}

export default React.forwardRef((props, ref) => (
  <TextInput innerRef={ref} {...props} />
));
