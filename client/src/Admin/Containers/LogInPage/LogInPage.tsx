import { TextField } from "@material-ui/core";
import React, { useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Stack } from "../../../Components/Stack/Stack";
import {
  useLogInMutation,
  useRegisterMutation,
} from "../../../generated/graphql";
import styles from "./LogInPage.module.scss";
import { useHistory } from "react-router-dom";

interface LogInFormValues {
  username: string;
  password: string;
}

const defaultValues = {
  username: "",
  password: "",
};

const LogInPage = () => {
  const [register] = useRegisterMutation();
  const [logIn] = useLogInMutation();
  const history = useHistory();

  useEffect(() => {
    const handleRegister = async () => {
      const response = await register({
        variables: {
          username: "annalia",
          password: "password",
        },
      });

      if (response.data?.register.errors) {
        console.log("Register error: ", response.data.register.errors);
        return null;
      }

      console.log("registerdata", response.data?.register, "registerdata");
    };

    handleRegister();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const methods = useForm<LogInFormValues>({
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  const {
    control,
    getValues,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const handleLogIn = async (values: LogInFormValues) => {
    try {
      const logInResponse = await logIn({
        variables: {
          ...values,
        },
      });

      if (logInResponse.data?.login.errors) {
        logInResponse.data?.login.errors.forEach((error) => {
          console.log(error.field, "error.field");
          //@ts-expect-error: for ts issue where it can't tell type from template literal
          setError(`${error.field}`, error);
        });
      } else {
        history.push("/");
      }

      return logInResponse;
    } catch (err) {
      console.log("Log in error message: ", err.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleLogIn)} className={styles.wrapper}>
        <Stack direction="vertical">
          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="username"
                error={!!errors?.username?.message}
                helperText={errors?.username?.message}
              />
            )}
            name="username"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="password"
                error={!!errors?.password?.message}
                helperText={errors?.password?.message}
              />
            )}
            name="password"
            control={control}
          />
        </Stack>

        <button type="submit">Log in</button>
      </form>
    </FormProvider>
  );
};

export default LogInPage;
