import React, { useReducer, useCallback } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import _pick from "lodash/pick";

const reducer = (state: Object, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "TITLE":
    case "DESCRIPTION":
    case "TAGS":
    case "IS_ACTIVE":
    case "IS_DELETED":
      return { ...state, [action.type]: action.payload?.[action.type] };
    default:
      return state;
  }
};

interface FormProps {
  formContainerClassName?: string;
  formHeaderFieldConfig: { label: string };
  formFooterFieldConfig: Array<any>;
  formBodyFieldConfig: Array<any>;
  formStateDispatch: Object;
}

interface FormHeaderProps {
  formHeaderFieldConfig: { label: string };
}

const FormHeader = ({ formHeaderFieldConfig }: FormHeaderProps) => {
  return (
    <Box sx={{ marginTop: "1rem", marginLeft: "2rem" }}>
      <Typography variant="h3">{formHeaderFieldConfig.label}</Typography>
    </Box>
  );
};

const FORM_BODY_STYLES = {
  p: 2,
  marginX: "1rem",
  overflowY: "auto",
  height: "calc(100vh - 8.5rem);",
};

interface FormBodyProps {
  formBodyFieldConfig: Array<any>;
  onFormStateDispatch: any;
}

const FormBody = ({
  formBodyFieldConfig,
  onFormStateDispatch,
}: FormBodyProps) => {
  return (
    <Box sx={{ ...FORM_BODY_STYLES }}>
      {formBodyFieldConfig.map((formBodyField, key) => {
        const FieldComponent = formBodyField.fieldComponent;
        return (
          <FieldComponent
            key={key}
            {...formBodyField.formFieldProps}
            onFormStateDispatch={onFormStateDispatch}
          />
        );
      })}
    </Box>
  );
};

interface FormFooterProps {
  formFooterFieldConfig: Array<any>;
  onFooterAction: any;
}

// const FooterActions = () => {};

const FORM_FOOTER_FIELD_CONFIG_PROPS = ["variant", "sx"];

const FORM_FOOTER_STYLES = {
  width: "100%",
  borderTop: "1px solid #708090",
  display: "flex",
  justifyContent: "end",
  paddingY: "0.8rem",
  position: "fixed",
  bottom: "0",
  backgroundColor: "white",
};

const FormFooter = ({
  formFooterFieldConfig,
  onFooterAction,
}: FormFooterProps) => {
  const handleClick = useCallback(
    (actionID: string) => {
      onFooterAction({ actionID });
    },
    [onFooterAction]
  );

  return (
    <Box sx={FORM_FOOTER_STYLES}>
      <Box>
        {formFooterFieldConfig.map((formFooterConfig, key) => (
          <Button
            key={`${formFooterConfig.label}_${key}`}
            {..._pick(formFooterConfig, FORM_FOOTER_FIELD_CONFIG_PROPS)}
            onClick={() => {
              handleClick(formFooterConfig.actionID);
            }}
          >
            {formFooterConfig.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

const Form = ({
  formContainerClassName,
  formHeaderFieldConfig,
  formBodyFieldConfig,
  formFooterFieldConfig,
  formStateDispatch,
}: FormProps) => {
  const [formState, onFormStateDispatch] = useReducer(reducer, {});

  const handleFooterAction = useCallback(
    ({ actionID }: any) => {
      switch (actionID) {
        case "SAVE":
          console.log("save", formState);
          break;
        case "CANCEL":
          console.log("cancel");
          break;
        default:
          return {};
      }
    },
    [formState]
  );

  return (
    <FormControl sx={{ width: "100%" }}>
      <FormHeader formHeaderFieldConfig={formHeaderFieldConfig} />
      <FormBody
        formBodyFieldConfig={formBodyFieldConfig}
        onFormStateDispatch={onFormStateDispatch}
      />
      <FormFooter
        formFooterFieldConfig={formFooterFieldConfig}
        onFooterAction={handleFooterAction}
      />
    </FormControl>
  );
};

export default Form;
