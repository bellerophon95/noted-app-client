import React, { useState, useCallback, useEffect } from "react";

import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";

import _without from "lodash/without";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const top100Films = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

interface TagProps {
  fieldLabel: string;
  placeholder: string;
  sx: Object;
  variant: string;
  onFormStateDispatch: any;
}

const FORM_CONTAINER_STYLES = { marginTop: 4.5, width: "100%" };

const Tag = (props: TagProps) => {
  const [selectedTagValues, setSelectedTagValues] = useState<any>([]);
  const { onFormStateDispatch } = props;

  useEffect(() => {
    onFormStateDispatch({
      type: "TAGS",
      payload: { TAGS: selectedTagValues },
    });
  }, [onFormStateDispatch, selectedTagValues]);

  return (
    <FormControl sx={FORM_CONTAINER_STYLES}>
      <Autocomplete
        multiple
        id="tags-outlined"
        freeSolo
        options={top100Films}
        getOptionLabel={(option) => option}
        defaultValue={[]}
        filterSelectedOptions
        onChange={(event, inputText) => {
          setSelectedTagValues(inputText);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.fieldLabel}
            placeholder={props.placeholder}
          />
        )}
      />
    </FormControl>
  );
};

export default Tag;
