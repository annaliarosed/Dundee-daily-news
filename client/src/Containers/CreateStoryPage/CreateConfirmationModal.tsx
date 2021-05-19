import { Button } from "@material-ui/core";
import React from "react";
import styles from "./CreateConfirmationModal.module.scss";
import { Stack } from "../../Components/Stack/Stack";

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
          This will save and publish your story on the homepage would you like
          to continue?
        </p>
        <Stack direction="horizontal" gap={2}>
          <Button variant="contained" type="submit" color="primary">
            yah!
          </Button>
          <Button variant="contained" onClick={() => setIsModalOpen(false)}>
            cancel
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default CreateConfirmationModal;
