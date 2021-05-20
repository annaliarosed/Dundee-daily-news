import React from "react";
import { useFormContext } from "react-hook-form";
import { CreateStoryFormValues } from "./helpers";
import styles from "./CreateStoryFormFooter.module.scss";
import { Stack } from "../../Components/Stack/Stack";

interface CreateStoryFormFooterProps {
  onClear: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateStoryFormFooter: React.FC<CreateStoryFormFooterProps> = ({
  onClear,
  setIsOpen,
}) => {
  const {
    formState: { isDirty, isValid },
  } = useFormContext<CreateStoryFormValues>();

  //TODO add loading state
  return (
    <div className={styles.wrapper}>
      <Stack gap={2} justify="flex-end">
        <button
          type="button"
          className={styles.saveButton}
          disabled={!isDirty || !isValid}
          onClick={() => setIsOpen(true)}
        >
          Save
        </button>
        <button className={styles.cancelButton} onClick={onClear}>
          Clear
        </button>
      </Stack>
    </div>
  );
};

export default CreateStoryFormFooter;
