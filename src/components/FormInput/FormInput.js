/* eslint-disable react/prop-types */
import './FormInput.css';

// eslint-disable-next-line react/prop-types
function FormInput({
  name,
  labelName = name,
  min,
  max,
  description,
  handler,
  errors,
}) {
  return (
    <>
      <label htmlFor={name} className="form-label">
        {labelName}
        <input
          type={name}
          minLength={min}
          maxLength={max}
          className="form-input"
          placeholder={description}
          onChange={handler}
          required
        />
      </label>
      {/* eslint-disable-next-line no-console */}
      <span className="input-error">
        {errors && errors[name]}
      </span>
    </>
  );
}

export default FormInput;
