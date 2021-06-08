import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Stack } from "../../Components/Stack/Stack";
import { useSendEmailMutation } from "../../generated/graphql";
import styles from "./ContactPage.module.scss";
import { divide } from "ramda";
import Modal from "../../Components/Modal";
//TODO FINISH
interface ContactPageFormValues {
  email: string;
  name: string;

  message: string;
}

const defaultValues = {
  email: "",
  name: "",

  message: "",
};

//email: String!
// name: String!

// message: String!
// }

const ContactPage = () => {
  const [sendEmail] = useSendEmailMutation();
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const methods = useForm<ContactPageFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  const { handleSubmit, control, reset } = methods;

  useEffect(() => {
    setEmailSent(false);
    reset();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSendEmail = async (values: ContactPageFormValues) => {
    try {
      await sendEmail({
        variables: {
          input: {
            email: values.email,
            name: values.name,
            message: values.message,
          },
        },
      });
      console.log("worked");
      setEmailSent(true);
      reset();
    } catch (error) {
      console.log(error.message);
      setEmailSent(false);
      return <div>Could not send email: {error.message}</div>;
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Send us an email!</h1>
      <form onSubmit={handleSubmit(handleSendEmail)}>
        <Stack direction="vertical">
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Email"
                className={styles.field}
              />
            )}
            name="email"
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Name"
                className={styles.field}
              />
            )}
            name="name"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="message"
                className={styles.field}
              />
            )}
            name="message"
            control={control}
          />
        </Stack>

        <button type="submit">send email</button>
      </form>

      {
        <Modal
          message="your email was successfully sent we will getback to you whenever we want"
          title="Email sent"
          isOpen={emailSent}
          onClose={() => setEmailSent(false)}
        />
      }
    </div>
  );
};

export default ContactPage;
