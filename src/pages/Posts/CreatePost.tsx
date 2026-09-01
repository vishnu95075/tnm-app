import { Navigate, useNavigate } from "react-router-dom";
import CreatePostCard from "../../components/Post/CreatePostCard";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const CreatePost = () => {

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" replace />;

  const { data: profile, isLoading, isError } = useCurrentUser(token);
  if (isLoading) return <div>Loading profile...</div>;
  if (isError) {
    localStorage.removeItem("token");
    return <div>Error loading profile</div>;
  }
    return (
        <>
            <h1> Create Post</h1>
            <CreatePostCard data = {profile}/>
        </>
    );
}

export default CreatePost;