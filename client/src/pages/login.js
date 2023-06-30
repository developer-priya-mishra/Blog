import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [userData, setData] = useState({
        email: "",
        password: ''
    });
    const handleChange = (e) => {
        setData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = async () => {
        try {
            const result = await axios.post("http://localhost:5000/auth/login", userData);
            alert(result.data.msg)
            localStorage.setItem("token", result.data.token)
            localStorage.setItem("user", result.data.user.name)
            navigate('/blog')

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <>
            <br />
            <br />
            <Box display={"flex"} flexDirection={"column"} maxWidth={400} borderRadius={5} margin="auto" padding={3} alignItems="center" boxShadow={'5px 5px 10px #ccc'}>
                <Typography variant="h4">Login</Typography>
                <TextField type={"email"} placeholder="Email" margin="normal" name="email" value={userData.email} onChange={handleChange} />
                <TextField type={"password"} placeholder="Password" margin="normal" name="password" value={userData.password} onChange={handleChange} />
                <br />
                <Button variant="contained" color="warning" onClick={onSubmit}>Login</Button>
            </Box>
        </>
    )
}

export default Login;