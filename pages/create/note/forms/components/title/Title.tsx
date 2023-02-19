import React, { useReducer, useCallback } from "react";

import TextField from "@mui/material/TextField";

import _debounce from "lodash/debounce";

interface TitleProps {
  fieldLabel: String;
  onFormStateDispatch: any;
}

const Title = (props: TitleProps) => {
  const { onFormStateDispatch } = props;

  const handleChange = useCallback(
    (inputText: any) => {
      _debounce(() => {
        onFormStateDispatch({
          type: "TITLE",
          payload: { TITLE: inputText.target.value },
        });
      }, 500)(inputText);
    },
    [onFormStateDispatch]
  );

  return (
    <div>
      <TextField
        id="standard-basic"
        label={props.fieldLabel}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default Title;
