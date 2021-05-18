import {
  CircularProgress,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { format } from "date-fns";
import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import { useGetStoriesQuery } from "../../../generated/graphql";

const AdminPageTable = () => {
  const { data, loading, error } = useGetStoriesQuery();

  if (error) {
    return <Snackbar message="This is an error message!" />;
  }

  if (loading || !data) {
    return <CircularProgress />;
  }

  const { stories } = data;
  // TODO figure out missing year
  const test = format(stories[0].createdAt, "MMM Do");
  console.log(test);
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
                <TableCell>{test}</TableCell>
                <TableCell>{story.title}</TableCell>
                <TableCell>{story.category}</TableCell>
                <TableCell>
                  <Stack>
                    <button>edit</button>
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
