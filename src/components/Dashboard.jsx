import React, { useState } from "react";
import { Container, Grid, Card, CardContent, Typography, TextField, Button, Box, Chip } from "@mui/material";

const myDetails = {
  name: "Mansi Prajapati",
  email: "mansi@gmail.com",
  createdDate: "January 15, 2022",
  tags: ["React", "Material UI", "Web Dev"],
};

const popularPosts = [
  { id: 1, title: "React Best Practices", description: "A guide to writing clean React code." },
  { id: 2, title: "Material UI Tips", description: "Enhance your UI with Material UI." },
];

const Dashboard = () => {
  const [newPost, setNewPost] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleCreatePost = () => {
    alert(`New Post Created: ${newPost.title}`);
    setNewPost({ title: "", description: "" });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h4">My Information</Typography>
              <Typography>Name: {myDetails.name}</Typography>
              <Typography>Email: {myDetails.email}</Typography>
              <Typography>Created Date: {myDetails.createdDate}</Typography>
              <Box sx={{ mt: 2 }}>
                {myDetails.tags.map((tag, index) => (
                  <Chip key={index} label={tag} sx={{ mr: 1 }} />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6">My Popular Posts</Typography>
              {popularPosts.map((post) => (
                <Box key={post.id} sx={{ mt: 2, p: 2, border: "1px solid #ddd", borderRadius: "8px" }}>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.description}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <CardContent>
              <Typography variant="h6">Create a New Post</Typography>
              <TextField
                label="Title"
                variant="outlined"
                fullWidth
                name="title"
                value={newPost.title}
                onChange={handleInputChange}
                sx={{ mt: 2 }}
              />
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                name="description"
                value={newPost.description}
                onChange={handleInputChange}
                sx={{ mt: 2 }}
              />
              <Button variant="contained" color="primary" onClick={handleCreatePost} sx={{ mt: 2 }}>
                Create Post
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
