import React, { useState } from "react";
import { sort } from "ramda";
import { Link } from "react-router-dom";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

import AdminPageTable from "./AdminPageTable/AdminPageTable";
import {
  GetStoriesQuery,
  useDeleteStoryMutation,
  useGetStoriesQuery,
} from "../../generated/graphql";

import styles from "./AdminPage.module.scss";
import { StoryType } from "../CreateStoryPage/helpers";
import DeleteConfirmationModal from "./AdminPageTable/DeleteConfirmationModal";

const AdminPage = () => {
  const { data, loading, error } = useGetStoriesQuery();
  const [deleteStory] = useDeleteStoryMutation();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (loading || !data) {
    return <CircularProgress />;
  }

  const { stories } = data;

  const handleDeleteStory = async (id: number) => {
    try {
      await deleteStory({
        variables: {
          id: id,
        },
        update: (cache) => {
          cache.modify({
            fields: {
              stories(existingStories: StoryType[], { readField }) {
                return existingStories.filter(
                  (existingStories) =>
                    id !== readField("id", { ...existingStories })
                );
              },
            },
          });
        },
      });

      setIsDeleteModalOpen(false);
      //TO DO handle success
      console.log("deleted");
    } catch (err) {
      //TO DO handle error
      console.log("not deleted");
    }
  };

  const sortChronologically = (a: StoryType, b: StoryType): number => {
    return (
      new Date(Number(b.createdAt)).getTime() -
      new Date(Number(a.createdAt)).getTime()
    );
  };

  const sortedStories = sort(sortChronologically, stories);

  return (
    <div className={styles.wrapper}>
      <h1>Admin</h1>
      <Link to="/create">
        <Button variant="outlined" color="primary">
          Add new story
        </Button>
      </Link>

      <AdminPageTable
        stories={sortedStories}
        onDelete={handleDeleteStory}
        isModalOpen={isDeleteModalOpen}
        setIsModalOpen={setIsDeleteModalOpen}
      />
    </div>
  );
};

export default AdminPage;
