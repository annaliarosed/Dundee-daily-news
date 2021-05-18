import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { Stack } from "../../Components/Stack/Stack";
import styles from "./CreateStoryForm.module.scss";

const CreateStoryForm = () => {
  const {
    formState: { errors },
  } = useForm();
  //TODO add dropZone
  return (
    <form className={styles.wrapper}>
      <Stack direction="vertical">
        <TextField variant="outlined" label="Title" />
        <TextField variant="outlined" label="paragraph" multiline rows={7} />
      </Stack>
    </form>
  );
};

export default CreateStoryForm;
