import { Alert } from "@mui/material";

const Error = (msg: string) => {
    return (
        <Alert severity="error">{msg}</Alert>
    );
}