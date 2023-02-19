import React, { useCallback } from "react";

import TextField from "@mui/material/TextField";

import _debounce from "lodash/debounce";

interface DescriptionProps {
  fieldLabel: String;
  onFormStateDispatch: any;
}

const Description = (props: DescriptionProps) => {
  const { onFormStateDispatch } = props;

  const handleChange = useCallback(
    (inputText: any) => {
      _debounce(() => {
        onFormStateDispatch({
          type: "DESCRIPTION",
          payload: { DESCRIPTION: inputText.target.value },
        });
      }, 500)(inputText);
    },
    [onFormStateDispatch]
  );

  return (
    <div>
      <TextField
        {...props}
        id="standard-basic"
        onChange={handleChange}
        label={props.fieldLabel}
      />
    </div>
  );
};

export default Description;
