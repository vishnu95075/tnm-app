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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { HomeOutlined, MailOutlineOutlined } from "@mui/icons-material";
const NavLayout = () => {
    return (
        <>
            <Paper
                elevation={6}
                sx={{
                    mr: '23em',
                    mt: '10em',
                    borderRadius: 1,


                }}
            >
                <Stack spacing={1.5} >
                    <IconButton>
                        <HomeOutlined sx={{ width: 40, height: 40 }} />
                    </IconButton>
                    <IconButton     >
                        <Badge color="secondary" badgeContent={1000} max={20}>
                            <NotificationsNoneIcon sx={{ width: 40, height: 40 }} />
                        </Badge>
                    </IconButton>
                    <IconButton     >
                        <Badge color="secondary" badgeContent={99}>
                            <MailOutlineOutlined sx={{ width: 40, height: 40 }} />
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
