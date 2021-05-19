import React from "react";
import { sort } from "ramda";
import { Link } from "react-router-dom";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";

import AdminPageTable from "./AdminPageTable/AdminPageTable";
import { useGetStoriesQuery } from "../../generated/graphql";

import styles from "./AdminPage.module.scss";
import { StoryType } from "../CreateStoryPage/helpers";

const AdminPage = () => {
  const { data, loading, error } = useGetStoriesQuery();

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (loading || !data) {
    return <CircularProgress />;
  }

  const { stories } = data;

  const sortChronologically = (a: StoryType, b: StoryType): number => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
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

      <AdminPageTable stories={sortedStories} />
    </div>
  );
};

export default AdminPage;
