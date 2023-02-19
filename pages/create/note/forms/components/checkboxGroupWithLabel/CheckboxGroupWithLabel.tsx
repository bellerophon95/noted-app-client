import React, { useEffect } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxGroupWithLabelProps {
  formControlConfigProps: Array<any>;
  formControlContainerStyles: Object;
  onFormStateDispatch: any;
}

const CheckboxGroupWithLabel = ({
  formControlConfigProps,
  formControlContainerStyles,
  onFormStateDispatch,
}: CheckboxGroupWithLabelProps) => {
  return (
    <FormGroup style={formControlContainerStyles}>
      {formControlConfigProps.map((config, key) => (
        <FormControlLabel
          key={key}
          {...config}
          onChange={(event: { target: { checked: Boolean } }) => {
            onFormStateDispatch({
              type: config.actionID,
              payload: { [config.actionID]: event.target.checked },
            });
          }}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxGroupWithLabel;
