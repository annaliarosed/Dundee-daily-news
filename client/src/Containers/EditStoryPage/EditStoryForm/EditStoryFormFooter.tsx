import { Button } from "@material-ui/core";
import React from "react";

interface EditStoryFormFooterProps {
  onCancel: () => void;
}

const EditStoryFormFooter: React.FC<EditStoryFormFooterProps> = ({
  onCancel,
}) => {
  return (
    <div>
      <Button onClick={onCancel}>Cancel</Button>
      <Button type="submit">Save</Button>
    </div>
  );
};

export default EditStoryFormFooter;
