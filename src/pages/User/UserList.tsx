import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";

import { getUsers } from "../../api/userApi";
import type { UserResponse } from "../../types/user.types";

const UserList = () => {
  const [users, setUsers] = useState<UserResponse[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      console.log("Data : ",data);
      setUsers(data);
    };

    fetchUsers();
  }, []);

  console.log("vishnu")
  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        User List
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>User name</b></TableCell>
              <TableCell><b>Full name</b></TableCell>
              <TableCell><b>Profile Pic</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.userId}>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{user.fullName}</TableCell>
                <TableCell> 
                    <Avatar src={user.profilePicUrl}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserList;