import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import moment from "moment";

import { Stack } from "../../../Components/Stack/Stack";
import { CategoryTypesMapping, StoryType } from "../../CreateStoryPage/helpers";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import styles from "./AdminPageTable.module.scss";

interface AdminPageTableProps {
  stories: StoryType[];
  onDelete: (id: number) => Promise<void>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AdminPageTable: React.FC<AdminPageTableProps> = ({
  stories,
  onDelete,
  isModalOpen,
  setIsModalOpen,
}) => {
  const [currentId, setCurrentId] = useState<number>(0);
  // TODO change format of date to number?

  return (
    <>
      <h3>All stories:</h3>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stories.map((story) => (
              <TableRow key={story.id}>
                <TableCell>
                  {moment(Number(story.createdAt)).format("MMMM Do YYYY")}
                </TableCell>
                <TableCell>{story.head}</TableCell>
                <TableCell>{CategoryTypesMapping[story.category]}</TableCell>
                <TableCell>
                  <Stack>
                    <Link to={`/edit/${story.id}`}>
                      <button className={styles.editButton}>Edit</button>
                    </Link>
                    <button
                      className={styles.deleteButton}
                      onClick={() => {
                        setIsModalOpen(true);
                        setCurrentId(story.id);
                      }}
                    >
                      Delete
                    </button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {isModalOpen && (
        <DeleteConfirmationModal
          id={currentId}
          setIsModalOpen={setIsModalOpen}
          onDelete={onDelete}
        />
      )}
    </>
  );
};

export default AdminPageTable;
