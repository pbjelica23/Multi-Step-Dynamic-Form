import React from "react";
import { useTranslation } from "react-i18next";

import { FormElement } from "./FormElement";
import { Button, RegistrationForm, Container } from "./styledComponents";

export const Step = ({
  fields,
  formValues,
  currentStep,
  handleNextStep,
  handleChange,
  formErrors,
  disabledNextButton,
  lastStep,
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <RegistrationForm>
        {
          // fields from current step
          fields?.map((item) => {
            return (
              <FormElement
                key={item.code}
                field={item}
                formValues={formValues}
                handleChange={handleChange}
                formErrors={formErrors[item.code]}
              />
            );
          })
        }
        {currentStep !== 1 && ( //back button if not first step
          <Button
            style={{ marginTop: 30 }}
            onClick={(e) => handleNextStep(e, parseInt(currentStep) - 1)}
          >
            {t("backBtn")}
          </Button>
        )}
        <Button
          style={{ marginTop: 30 }} // next/submit button
          onClick={(e) =>
            handleNextStep(e, parseInt(currentStep) + 1, fields.length)
          }
          disabled={disabledNextButton}
        >
          {lastStep === currentStep ? t("submit") : t("nextBtn")}
        </Button>
      </RegistrationForm>
    </Container>
  );
};
