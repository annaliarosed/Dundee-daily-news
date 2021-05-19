import { CircularProgress, Snackbar } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetStoryQuery } from "../../generated/graphql";

const EditStoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetStoryQuery({
    variables: {
      id: Number(id),
    },
  });

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (!data || loading) {
    return <CircularProgress />;
  }

  return <div>Edit!</div>;
};

export default EditStoryPage;
