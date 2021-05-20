import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import styles from "./DeleteConfirmationModal.module.scss";

interface DeleteConfirmationModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: (id: number) => Promise<void>;
  id: number;
}
const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  id,
  setIsModalOpen,
  onDelete,
}) => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <h2>Are u sure you wanna delete?</h2>
        <p>
          This action is irreversible and will permentately delete your story,
          if you would like to continue press delete
        </p>
        <Stack direction="horizontal" gap={2}>
          <button className={styles.deleteButton} onClick={() => onDelete(id)}>
            Delete
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setIsModalOpen(false)}
          >
            cancel
          </button>
        </Stack>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
