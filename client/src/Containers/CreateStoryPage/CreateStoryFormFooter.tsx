import { Button } from "@material-ui/core";
import React from "react";
import { useFormContext } from "react-hook-form";
import { CreateStoryFormValues } from "./helpers";

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
    <div>
      <Button
        variant="contained"
        color="primary"
        disabled={!isDirty || !isValid}
        onClick={() => setIsOpen(true)}
      >
        Save
      </Button>
      <Button variant="contained" onClick={onClear}>
        Clear
      </Button>
    </div>
  );
};

export default CreateStoryFormFooter;
