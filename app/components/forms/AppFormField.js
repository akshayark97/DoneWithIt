import { View, Text } from "react-native";
import React from "react";
import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";
import { useFormikContext } from "formik";

export default function AppFormField({ name, ...otherProps }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visibility={touched[name]} />
    </>
  );
}
