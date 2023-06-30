import { Box, Button, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const navigate = useNavigate();
    const [addData, setData] = useState({
        title: "",
        category: "",
        description: ""
    });

    const blog = [
        {
            value: 'News'
        },
        {
            value: 'Travel'
        },
        {
            value: 'Education'
        },
        {
            value: 'Science'
        },
        {
            value: 'Food'
        },
    ];

    const handleChange = (e) => {
        setData({
            ...addData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.post("http://localhost:5000/blog/addBlog", addData, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            });
            alert(res.data.message)
            navigate('/blog')
        } catch (err) {
            console.log(err.data);
        }
    }
    return (
        <>
            <br />
            <br />
            <Typography variant="h4" textAlign={'center'}>Add a New Blog</Typography>
            <Box display={"flex"} flexDirection={"column"} maxWidth={400} borderRadius={5} margin="auto" padding={3} alignItems="center" boxShadow={'5px 5px 10px #ccc'}>


                <TextField label="Title" fullWidth margin="normal" value={addData.name} name="title" onChange={handleChange} />
                <TextField select label="Category" defaultValue="select" helperText="Please select your category" fullWidth margin="normal" value={addData.category} name="category" onChange={handleChange} >
                    {blog.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField label="Description" multiline fullWidth margin="normal" value={addData.description} name="description" onChange={handleChange} />
                <Button variant="contained" color="warning" fullWidth onClick={handleSubmit}>Add</Button>
            </Box>
        </>
    )
}

export default AddBlog;