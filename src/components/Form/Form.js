import './Form.css';

/* eslint-disable react/prop-types */
function Form({
  title,
  children,
  buttonText,
  isBtnDisabled,
  onSubmit,
}) {
  return (
    <form className="form" noValidate>
      <div className="form-content">
        <h3 className="form-heading">{title}</h3>
        {children}
        <button
          type="submit"
          className="form-button"
          aria-label={title}
          value={title}
          disabled={isBtnDisabled}
          onClick={onSubmit}
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default Form;
