import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Stack,
    Typography,
} from "@mui/material";

import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";

import CreatePostComponent from "../../components/Post/CreatePostComponent";
import type { UserResponse } from "../../types/user.types";


 export const CreatePostCard: React.FC<{ data?: UserResponse }> = ({ data }) => {
    const [open, setOpen] = useState(false);
    console.log("Props CreatePostCard ",data)
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 650,
                    p: 2,
                    borderRadius: 4,
                    background: "white",
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow:
                        "0 8px 30px rgba(0,0,0,.05)",
                }}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <Avatar
                        src={data?.profilePicUrl}
                        sx={{
                            width: 48,
                            height: 48,
                        }}
                    />

                    <Button
                        fullWidth
                        onClick={() => setOpen(true)}
                        sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            color: "text.secondary",
                            background: "#f5f6f8",
                            borderRadius: 3,
                            px: 2,
                            py: 1.4,

                            "&:hover": {
                                background: "#eceef2",
                            },
                        }}
                    >
                        <Typography fontSize={14}>
                            What's on your mind?
                        </Typography>
                    </Button>

                    <Button
                        onClick={() => setOpen(true)}
                        sx={{
                            background:
                                "linear-gradient(135deg,#7c3aed,#ec4899)",
                            color: "white",

                            "&:hover": {
                                background:
                                    "linear-gradient(135deg,#6d28d9,#db2777)",
                            },
                        }}
                    >
                        <AddPhotoAlternateRoundedIcon />
                    </Button>
                </Stack>
            </Box>

            <CreatePostComponent
                userId = {data?.authId}
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export default CreatePostCard;