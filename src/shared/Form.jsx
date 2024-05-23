import { useDispatch, useSelector } from "react-redux";
import { clearError, onChange, setError } from "../redux/slices/formSlice";
import { validate } from "../utils/validation";
import { capitalize } from "../utils/javascript";
import FormField from "../presentation/FormField";
import { confirmPassword } from "../constants/formConstants";

const Form = ({ fields, onSubmit }) => {
  const dispatch = useDispatch();
  const { formData, errors } = useSelector((state) => state.form);

  const handleChange = (event, message) => {
    const { name, value } = event.target;
    const errorMessage = message ?? `${capitalize(name)} is Invalid!`;

    dispatch(onChange({ name, value }));

    // Validate Field
    const isValid =
      name === confirmPassword
        ? validate(name, value, formData["Password"])
        : validate(name, value);

    // Dispatch Error or Not
    value && !isValid
      ? dispatch(setError({ name, error: errorMessage }))
      : dispatch(clearError(name));
  };

  const handleCheckbox = (event) => {
    const { value, name, checked } = event.target;
    const currentValues = formData[name] || [];

    // Updating Values based on check and uncheck
    const updatedValues = checked
      ? [...currentValues, value]
      : currentValues.filter((item) => item !== value);

    dispatch(onChange({ name, value: updatedValues }));
  };

  return (
    <form onSubmit={onSubmit} style={formStyle}>
      {fields.map((attributes, ind) => (
        <section key={ind}>
          <FormField
            formData={formData}
            attributes={attributes}
            onChange={handleChange}
            onCheckbox={handleCheckbox}
          />

          <span style={errorStyle}>{errors[attributes?.name]}</span>
        </section>
      ))}
    </form>
  );
};

export default Form;

const errorStyle = {
  fontSize: 14,
  color: "indianred",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 10,
};
