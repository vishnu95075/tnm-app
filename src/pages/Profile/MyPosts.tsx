import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Paper, Typography } from "@mui/material"
import { getAllPostByUserIdHook } from "../../hooks/getAllPostByUserId";
import ImageCarousel from "../../components/Post/ImageCarousel";

const MyPosts = (props: any) => {
    const { data: postData, isLoading, isError } = getAllPostByUserIdHook(props.userId);
    console.log("User id Mypost : ", props.userId, postData);
    return (<>

        {postData?.map((post, index) => {
            // Keep console logs before returning JSX
            console.log(post.content);

            return (
                <div key={index}>
                    <Typography>{post.content}</Typography>
                    <ImageCarousel
                        images={post.mediaUrl}
                        height={450}
                        autoPlay={false}
                        interval={3000}
                    />
                    {post.tag?.map((tag, tagIndex) => {
                        console.log("from Inside", tag);
                        return <span key={tagIndex}>#{tag} </span>;
                    })}
                </div>
            );
        })}
    </>
    );
}

export default MyPosts;