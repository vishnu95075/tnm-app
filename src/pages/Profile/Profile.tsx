import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");
    };

    return (
        <>
            <h2>Profile Page</h2>

            <button onClick={logout}>
                Logout
            </button>
        </>
    );
};

export default Profile;