//regex object
const REGEX = {
  email: /^[a-z0-9]+([-._]?[a-z0-9]+)?@[a-z0-9]+(-?[a-z0-9]+)?\.[a-z]{2,}$/i,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
  username: /^[a-z0-9\\-\\_]+$/,
};

//function for generating step arrays
export function generateStepsArray(fiedlsArray) {
  //sort fields
  fiedlsArray?.sort((a, b) => a.order - b.order);

  let newFormValues = {};

  //empty object with keys being field codes
  fiedlsArray.forEach((field) => {
    newFormValues[field.code] = "";
  });

  // Group by step
  const reduceArr = fiedlsArray.reduce((obj, item) => {
    obj[item.step] = obj[item.step] || [];
    obj[item.step].push(item);
    return obj;
  }, []);

  return { formConfig: reduceArr, formValuesConfig: newFormValues };
}

//check if field is valid
export function validateField(
  value,
  field,
  formValues,
  setErrorOnBlur = false
) {
  //input value
  const inputValue =
    value === null || value === undefined ? "" : value.toString().trim();
  //check date value
  const dateValue = field?.code === "birthdate" ? new Date(inputValue) : "";
  const today = new Date();
  //is date good
  const calculateNumberOfAge =
    dateValue && today.getFullYear() - dateValue.getFullYear();

  const fieldValidator = field?.validators || [];
  let message = "";

  //go through each validator and check input values for their parameters
  fieldValidator?.forEach(({ key, parameters }) => {
    if (key === "minLength") {
      if (inputValue.length < parameters.targetLength) {
        message = `minimum_length_${parameters.targetLength}`;
      }
    } else if (key === "maxLength") {
      if (inputValue.length > parameters.targetLength) {
        message = `maximum_length_${parameters.targetLength}`;
      }
    } else if (key === "emailValidator") {
      if (!REGEX.email.test(inputValue)) {
        message = `email_not_valid`;
      }
    } else if (key === "passwordStrength") {
      if (!REGEX.password.test(inputValue)) {
        message = `password_too_weak`;
      }
    } else if (key === "olderThan") {
      if (parameters.age > calculateNumberOfAge) {
        message = `older_than`;
      }
    } else if (key === "regex" && field?.code === "username") {
      if (!REGEX.username.test(inputValue)) {
        message = `input_value_not_valid`;
      }
    }
  });

  if (setErrorOnBlur) {
    if (!inputValue && inputValue === "") {
      message = "required_field";
    }
    setErrorOnBlur(message);
  }

  if (!inputValue && inputValue === "") {
    message = "required_field";
  }

  if (field?.code === "password_confirm") {
    const findPasswordValue = formValues && formValues["password"];
    message = findPasswordValue !== value && "password_mismatch";
  } else if (field?.code === "password") {
    const findPasswordConfirmValue =
      formValues && formValues["password_confirm"];
    if (findPasswordConfirmValue !== "" && findPasswordConfirmValue !== value) {
      message = "password_mismatch";
    } else {
      message += "";
    }
  }

  return message;
}

export function isValidStep(formValues, formConfig) {
  const fieldCodes = formConfig?.map((field) => field.code);

  const valid = fieldCodes?.map((item) => {
    if (Object.keys(formValues).includes(item)) {
      if (!!formValues[item]) {
        return true;
      }
      return false;
    }
  });

  return valid?.includes(false) ? false : true;
}
