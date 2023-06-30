import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Head = () => {
    const navigate = useNavigate();

    const username = localStorage.getItem("user")

    const handlogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate('/login')


    }
    return (
        <>
            <Typography variant='h4'>Welcome {username}</Typography>
            <Button variant="contained" sx={{ marginLeft: "50px" }} onClick={() => navigate('/blog')}>Blogs</Button>
            <Button variant="contained" sx={{ marginLeft: "50px" }} onClick={() => navigate('/addBlog')}>Add Blog</Button>
            <Button variant="contained" sx={{ marginLeft: "auto" }} onClick={handlogOut}>LogOut</Button>

        </>
    )
}

export default Head;