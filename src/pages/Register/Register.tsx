import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const register = () => {

        // Register API

        navigate("/login");
    };

    return (
        <>
            <h2>Register Page</h2>

            <button onClick={register}>
                Register
            </button>
        </>
    );
};

export default Register;