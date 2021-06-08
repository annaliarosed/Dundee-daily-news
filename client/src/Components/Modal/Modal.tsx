import React from "react";
import cn from "classnames";
import styles from "./Modal.module.scss";
import { Stack } from "../Stack/Stack";

interface ModalProps {
  message: string;
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  message,
  title,
  isOpen,
  onClose,
  className,
}) => {
  return (
    <div
      className={cn(styles.wrapper, className && className, {
        [styles.open]: isOpen,
      })}
    >
      <Stack justify="center" direction="vertical" className={styles.body}>
        <Stack justify="flex-end">
          {onClose && (
            <button
              className={styles.closeButton}
              aria-label="Close"
              onClick={onClose}
            >
              X
            </button>
          )}
        </Stack>
        <Stack direction="vertical" className={styles.messageWrapper}>
          <h1>{title && title}</h1>
          <p>{message}</p>
        </Stack>
      </Stack>
    </div>
  );
};

export default Modal;
