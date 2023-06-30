import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from 'axios';

const Blog = () => {
    const [blogData, setBlog] = useState([])
    useEffect(() => {
        const fetchAllBlogs = async () => {
            const res = await axios.get('http://localhost:5000/blog/allPosts')
            setBlog(res.data)
        };
        fetchAllBlogs();
    }, [])
    return (
        <>
            <br />
            <br />
            <Typography variant="h4" textAlign={'center'}>Latest Posts</Typography>
            <div style={{ display: "flex", flexDirection: "row" }}>

                <br />
                <br />

                {
                    blogData && blogData.length > 0 ?
                        blogData.map((item) => {
                            return (
                                <>

                                    <Box display={"flex"} flexDirection={"column"} width={300} height={350} margin="auto" borderRadius={5} padding={3} alignItems="center" boxShadow={'5px 5px 10px #ccc'}>
                                        <h1 >{item.title}</h1>
                                        <h4>{item.category}</h4>
                                        <p textAlign="justified">{item.description}</p>
                                        <br />
                                    </Box>
                                </>
                            )
                        })
                        :
                        <Typography variant="h4" textAlign={'center'} marginTop="15%">No blog</Typography>
                }


            </div>
        </>
    )
}

export default Blog;


