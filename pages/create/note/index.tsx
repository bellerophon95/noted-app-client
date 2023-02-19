import React from "react";

import Box from "@mui/material/Box";
import Form from "./forms";

import Title from "./forms/components/title";
import Description from "./forms/components/description";
import Tag from "./forms/components/tag";
import CheckboxGroupWithLabel from "./forms/components/checkboxGroupWithLabel";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";

const FORM_TITLE_CONFIG_PROPS = {
  label: "Create Note",
};

const FORM_CONTROL_CONFIG_PROPS = [
  {
    control: (
      <Box>
        <Checkbox size="small" />
      </Box>
    ),
    label: "is Active",
    size: "small",
    actionID: "IS_ACTIVE",
  },
  {
    control: (
      <Box>
        <Checkbox size="small" />
      </Box>
    ),
    label: "is Deleted",
    size: "small",
    actionID: "IS_DELETED",
  },
];

const FORM_BODY_CONFIG_PROPS = [
  {
    fieldComponent: Title,
    formFieldProps: {
      fieldLabel: "Title",
      sx: { width: "100%", marginTop: "1rem" },
      variant: "standard",
    },
  },
  {
    fieldComponent: Description,
    formFieldProps: {
      fieldLabel: "Description",
      sx: { width: "100%", marginTop: "1rem" },
      variant: "standard",
    },
  },
  {
    fieldComponent: Tag,
    formFieldProps: {
      fieldLabel: "Tags",
      placeholder: "Select Tags...",
      sx: { width: "100%", marginTop: "1rem" },
      variant: "standard",
    },
  },
  {
    fieldComponent: CheckboxGroupWithLabel,
    formFieldProps: {
      formControlContainerStyles: {
        marginTop: "1rem",
        marginLeft: "1rem",
      },
      formControlConfigProps: FORM_CONTROL_CONFIG_PROPS,
    },
  },
];

const FORM_FOOTER_FIELD_CONFIG = [
  {
    variant: "outlined",
    sx: { marginLeft: "0.6rem" },
    label: "Cancel",
    actionID: "CANCEL",
  },
  {
    variant: "contained",
    sx: { marginLeft: "0.6rem", marginRight: "1.8rem" },
    label: "Save",
    actionID: "SAVE",
  },
];

const Note = () => {
  return (
    <Box>
      <Form
        formHeaderFieldConfig={FORM_TITLE_CONFIG_PROPS}
        formBodyFieldConfig={FORM_BODY_CONFIG_PROPS}
        formFooterFieldConfig={FORM_FOOTER_FIELD_CONFIG}
      />
    </Box>
  );
};

export default Note;
