import { CircularProgress, Snackbar } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

import {
  useGetStoryQuery,
  useUpdateStoryMutation,
} from "../../generated/graphql";
import EditStoryForm from "./EditStoryForm";
import { EditStoryFormValues } from "./helpers";

// TODO move all default values to top useForm hook
const EditStoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const { data, loading, error } = useGetStoryQuery({
    variables: {
      id: Number(id),
    },
  });
  const [updateStory] = useUpdateStoryMutation();

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (!data || loading) {
    return <CircularProgress />;
  }

  const { story } = data;

  if (!story) {
    return null;
  }

  const handleUpdateStory = async (values: EditStoryFormValues, id: number) => {
    try {
      await updateStory({
        variables: {
          id: id,
          input: {
            ...values,
          },
        },
      });

      history.push("/admin");
      // TODO put success state
      console.log("it worked!");
    } catch (err) {
      // TODO put eerror state
      console.log("it didnt work :((");
    }
  };

  return <EditStoryForm id={id} story={story} onUpdate={handleUpdateStory} />;
};

export default EditStoryPage;
