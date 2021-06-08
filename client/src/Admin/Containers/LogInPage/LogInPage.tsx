import { TextField } from "@material-ui/core";
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Stack } from "../../../Components/Stack/Stack";
import {
  useGetCurrentUserQuery,
  useLogInMutation,
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
  const [logIn] = useLogInMutation();
  const history = useHistory();
  const { data, loading, error, refetch } = useGetCurrentUserQuery({
    fetchPolicy: "cache-and-network",
  });

  const methods = useForm<LogInFormValues>({
    reValidateMode: "onChange",
    defaultValues: defaultValues,
  });

  const {
    control,

    handleSubmit,

    formState: { errors },
  } = methods;

  if (error || !data) {
    return <div>Error</div>;
  }

  if (loading) {
    return <div>loading.....</div>;
  }

  const handleLogIn = async (values: LogInFormValues) => {
    try {
      await logIn({
        variables: {
          ...values,
        },
      });

      await refetch();
      history.push("/admin");
    } catch (error) {
      console.log(error.message);
      return <div>{error.message}</div>;
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
