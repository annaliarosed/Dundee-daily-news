import { TextField } from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Stack } from "../../Components/Stack/Stack";
import styles from "./ContactPage.module.scss";
//TODO FINISH
interface ContactPageFormValues {
  name: string;
  message: string;
  userEmail: string;
  status: boolean;
}

const ContactPage = () => {
  const methods = useForm<ContactPageFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, dirtyFields },
  } = methods;

  const test = process.env.PASSWORD;
  console.log(test, "password");
  return (
    <Stack direction="vertical">
      <Controller
        render={({ field }) => (
          <TextField {...field} variant="outlined" label="Name" />
        )}
        name="name"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} variant="outlined" label="message" />
        )}
        name="message"
        control={control}
      />
      <Controller
        render={({ field }) => (
          <TextField {...field} variant="outlined" label="userEmail" />
        )}
        name="userEmail"
        control={control}
      />
    </Stack>
  );
};

export default ContactPage;
