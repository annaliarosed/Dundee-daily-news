import React from "react";
import styles from "./CreateConfirmationModal.module.scss";
import { Stack } from "../../Components/Stack/Stack";
import cn from "classnames";

interface CreateConfirmationModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateConfirmationModal: React.FC<CreateConfirmationModalProps> = ({
  setIsModalOpen,
}) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h2>Publish now?</h2>
        <p>
          This will save and publish your story on the homepage if you would
          like to continue press save or to go back press cancel
        </p>
        <Stack direction="horizontal" gap={2} justify="flex-end">
          <button
            className={cn(styles.modalButton, styles.saveButton)}
            type="submit"
          >
            Save
          </button>
          <button
            className={cn(styles.modalButton, styles.cancelButton)}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
        </Stack>
      </div>
    </div>
  );
};

export default CreateConfirmationModal;
