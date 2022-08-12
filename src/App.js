import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useTranslation } from "react-i18next";
import { createGlobalStyle } from "styled-components";

import DarkTheme from "./themes/Dark";
import Header from "./components/Header";
import LightTheme from "./themes/Light";
import { Container, TitleWithImage } from "./components/styledComponents";
import { fieldData } from "./components/fieldsArray";
import { Step } from "./components/Step";

import { generateStepsArray, validateField, isValidStep } from "./helpers";
import { Success } from "./components/Success";

//alert error
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
   background-color: ${(p) => p.theme.bodyBgColor};
  }
`;

function App() {
  //form config
  const { formConfig, formValuesConfig } = generateStepsArray(fieldData);
  // step arrays filled with data
  const [stepConfig, setStepConfig] = useState(formConfig || []);
  // current step of form
  const [currentStep, setCurrentStep] = useState(1);
  // form values
  const [formValues, setFormValues] = useState(formValuesConfig || {});
  // form errors
  const [formErrors, setFormErrors] = useState({});
  // light and dark theme
  const [theme, setTheme] = useState(LightTheme);
  //valid form fields
  const [validFormFields, setIsValidFormFields] = useState(
    isValidStep(formValues)
  );
  //snackbar for alert error
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { t } = useTranslation();

  //handle step function
  const handleNextStep = (e, step) => {
    e.preventDefault();
    !validFormFields && setOpenSnackbar(true); //open snackbar if form fields are not valid
    Object.keys(formErrors).length && setOpenSnackbar(true);
    !Object.keys(formErrors).length && validFormFields && setCurrentStep(step); //if form fields valid and no errors set step
  };

  //handle input changes
  const handleChange = (e, field) => {
    setFormErrors({}); //new error always blank from start
    let inputName = e.target.name; //input name
    let value = e.target.value; //input value
    const newFormValues = { [inputName]: value }; //assign values to new name
    let isFieldValid = validateField(value, field, formValues); // check if field is valid
    let newFormErrors = { [inputName]: isFieldValid }; //new form errors
    setFormValues({ ...formValues, ...newFormValues }); // set new form values
    isFieldValid && setFormErrors({ ...formErrors, ...newFormErrors }); // set new errors if there is some
  };

  useEffect(() => {
    const check = isValidStep(formValues, formConfig[currentStep]);
    setIsValidFormFields(check);
  }, [formValues]);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <Container>
        <Header />
        <TitleWithImage />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openSnackbar}
          autoHideDuration={5000}
          onClose={() => setOpenSnackbar(false)}
        >
          <Alert severity="error" sx={{ width: "100%" }}>
            {t("error")}
          </Alert>
        </Snackbar>
        {currentStep !== formConfig.length && (
          <Step
            fields={stepConfig[currentStep]}
            lastStep={stepConfig.length - 1}
            formValues={formValues}
            currentStep={currentStep}
            handleNextStep={handleNextStep}
            handleChange={handleChange}
            formErrors={formErrors}
            disabledNextButton={Object.keys(formErrors).length}
          />
        )}

        {currentStep === formConfig.length && (
          <Success formValues={formValues} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
