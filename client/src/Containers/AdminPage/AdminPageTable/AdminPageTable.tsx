import React from "react";
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
import { Stories } from "../../CreateStoryPage/helpers";
import { Link } from "react-router-dom";

interface AdminPageTableProps {
  stories: Stories;
}
const AdminPageTable: React.FC<AdminPageTableProps> = ({ stories }) => {
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
                  {moment(story.createdAt).format("MMMM Do YYYY")}
                </TableCell>
                <TableCell>{story.head}</TableCell>
                <TableCell>{story.category}</TableCell>
                <TableCell>
                  <Stack>
                    <Link to={`/edit/${story.id}`}>
                      <button>edit</button>
                    </Link>
                    <button>delete</button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AdminPageTable;
