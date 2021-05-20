import React from "react";
import { useFormContext } from "react-hook-form";
import { Stack } from "../../../../Components/Stack/Stack";
import { EditStoryFormValues } from "../helpers";
import styles from "./EditStoryFormFooter.module.scss";

interface EditStoryFormFooterProps {
  onCancel: () => void;
}

const EditStoryFormFooter: React.FC<EditStoryFormFooterProps> = ({
  onCancel,
}) => {
  const {
    formState: { isDirty, errors },
  } = useFormContext<EditStoryFormValues>();

  const isValid = Object.keys(errors).length === 0;

  return (
    <div className={styles.wrapper}>
      <Stack gap={3} justify="flex-end">
        <button
          className={styles.saveButton}
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Save
        </button>
        <button className={styles.cancelButton} onClick={onCancel}>
          Cancel
        </button>
      </Stack>
    </div>
  );
};

export default EditStoryFormFooter;
