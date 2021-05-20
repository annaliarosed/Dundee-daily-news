import React from "react";
import CreateStoryForm from "./CreateStoryForm";
import styles from "./CreateStoryPage.module.scss";

const CreateStoryPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Create a story!</h2>
      <CreateStoryForm />
    </div>
  );
};
export default CreateStoryPage;
