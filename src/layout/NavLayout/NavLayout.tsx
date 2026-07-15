import {
    Stack,
    Paper,
    Avatar,
    Badge,
    IconButton
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import AddIcon from '@mui/icons-material/Add';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { HomeOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link, Navigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const NavLayout = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const {
        data: profile,
        isLoading,
        isError,
        error,
        isFetching,
        refetch,
    } = useCurrentUser(token);

    if (isLoading) return <div>Loading profile...</div>;
    if (isError) return <div>Error loading profile</div>;

    return (
        <>
            <Paper
                elevation={6}
                sx={{
                    mr: '23em',
                    mt: '10em',
                    borderRadius: 4.5,

                }}
            >
                <Stack spacing={1.5} >
                    <IconButton
                        component={Link}
                        to="/"
                    >
                        <HomeOutlined sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton
                        component={Link}
                        to="/like"
                    >
                        <Badge color="secondary" badgeContent={60} max={10}>
                            <FavoriteBorderOutlinedIcon sx={{ width: 40, height: 40 }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        component={Link}
                        to="/comment"
                    >
                        <Badge color="secondary" badgeContent={99} max={5}>
                            <CommentOutlinedIcon sx={{ width: 40, height: 40 }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        component={Link}
                        to="/notification"  >
                        <Badge color="secondary" badgeContent={1000} max={20}>
                            <NotificationsNoneIcon sx={{ width: 40, height: 40 }} />
                        </Badge>
                    </IconButton>
                    <IconButton component={Link}
                        to="/reels">
                        <VideoLibraryOutlinedIcon sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton
                        component={Link}
                        to="/search"
                    >
                        <SearchIcon sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton
                        component={Link}
                        to="/create"
                    >
                        <AddIcon sx={{ width: 40, height: 40 }} />

                    </IconButton>
                    <IconButton
                        component={Link}
                        to="/profile"
                    >
                        <Avatar
                            sx={{ width: 40, height: 40 }}
                            alt="Remy Sharp"
                            src={profile?.profilePicUrl}
                        />
                    </IconButton>
                </Stack>
            </Paper >
        </>
    );
}

export default NavLayout
