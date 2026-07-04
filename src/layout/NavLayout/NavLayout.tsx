import { imgAvatar } from "../../assets/Common";
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
const NavLayout = () => {
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
                    <IconButton>
                        <HomeOutlined sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton     >
                        <Badge color="secondary" badgeContent={60} max={10}>
                            <FavoriteBorderOutlinedIcon sx={{ width: 40, height: 40 }} />
                        </Badge>
                    </IconButton>
                    <IconButton     >
                        <Badge color="secondary" badgeContent={99} max={5}>
                            <CommentOutlinedIcon sx={{ width: 40, height: 40 }} />
                        </Badge>
                    </IconButton>
                    <IconButton     >
                        <Badge color="secondary" badgeContent={1000} max={20}>
                            <NotificationsNoneIcon sx={{ width: 40, height: 40 }} />
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <VideoLibraryOutlinedIcon sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton>
                        <SearchIcon sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton>
                        <AddIcon sx={{ width: 40, height: 40 }} />

                    </IconButton>
                    <IconButton>
                        <Avatar
                            sx={{ width: 40, height: 40 }}
                            alt="Remy Sharp"
                            src={imgAvatar}
                        />
                    </IconButton>
                </Stack>
            </Paper >
        </>
    );
}

export default NavLayout
