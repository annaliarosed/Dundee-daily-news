import React from "react";
import styles from "./AdminPage.module.scss";
import { Button } from "@material-ui/core";
import AdminPageTable from "./AdminPageTable/AdminPageTable";
import { Link } from "react-router-dom";

const AdminPage = () => {
  // on click open form to add story

  return (
    <div className={styles.wrapper}>
      <h1>Admin</h1>
      <Link to="/create">
        <Button variant="outlined" color="primary">
          Add new story
        </Button>
      </Link>

      <AdminPageTable />
    </div>
  );
};

export default AdminPage;
