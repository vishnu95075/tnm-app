import {
    Card,
    CardMedia,
    Grid,
    Tab,
    Tabs,
    Typography,
} from "@mui/material";

import {
    BookmarkBorder,
    FavoriteBorder,
    GridOn,
} from "@mui/icons-material";


const reels = [
    "https://picsum.photos/300?1",
    "https://picsum.photos/300?2",
    "https://picsum.photos/300?3",
    "https://picsum.photos/300?4",
    "https://picsum.photos/300?5",
    "https://picsum.photos/300?6",
    "https://picsum.photos/300?7",
    "https://picsum.photos/300?8",
    "https://picsum.photos/300?9",
];

const saved = [
    "https://picsum.photos/300?10",
    "https://picsum.photos/300?11",
    "https://picsum.photos/300?12",
];

const liked = [
    "https://picsum.photos/300?13",
    "https://picsum.photos/300?14",
    "https://picsum.photos/300?15",
];

import { getAllPostByUserIdHook } from "../../hooks/getAllPostByUserId";
import ImageCarousel from "../../components/Post/ImageCarousel";
import { useState } from "react";

const MyPosts = (props: any) => {
    const [tab, setTab] = useState(0);

    const { data: postData, isLoading, isError } = getAllPostByUserIdHook(props.userId);
    console.log("User id Mypost : ", props.userId, postData);


    const renderGrid = (images: string[]) => (
        <Grid container spacing={2} >
            {postData?.map((post, index) => {

                return (<>
                    <Grid size={{ xs: 4 }} key={index}>
                        <Card elevation={0}>
                            <ImageCarousel
                                images={post.mediaUrl}
                                height={250}
                                autoPlay={false}
                                interval={3000}
                            /> 
                        </Card>
                    </Grid>

                </>

                );
            })}
        </Grid>
    );


    return (
        <>
            {/* <Divider sx={{ my: 4 }} /> */}
            <Tabs
                value={tab}
                centered
                onChange={(e, v) => setTab(v)}
            >
                <Tab icon={<GridOn />} label="Reels" />

                <Tab icon={<BookmarkBorder />} label="Saved" />

                <Tab icon={<FavoriteBorder />} label="Liked" />

            </Tabs>

            {tab === 0 && renderGrid(reels)}

            {tab === 1 && renderGrid(saved)}

            {tab === 2 && renderGrid(liked)}

        </>
    );
}

export default MyPosts;