import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";

const popularPosts = [
    {
        id: 1,
        title: "Mastering React in 2025",
        description: "A deep dive into the best practices and new features of React.",
        image: "https://api.edueyrieindia.com/static/storage/blog/cover-img-1731355983305.webp",
        },
        {
        id: 2,
        title: "Enhance your UI with Material UI",
        description: "Explore the advantages of using Material UI in modern web apps.",
        image: "https://blog.openreplay.com/images/why-should-you-use-material-ui/images/hero.png",
        },
        {
        id: 3,
        title: "Top JavaScript Frameworks",
        description: "A comparison of the most popular JavaScript frameworks in 2025.",
        image: "https://media.licdn.com/dms/image/v2/C4D12AQGE_QDhRlMqxw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1634192303205?e=2147483647&v=beta&t=nAjdEhNsPvOx-9HUrx0Ekf1_JPK112RKHHwTQSeCtHk",
        },
        {
        id: 4,
        title: "The Future of Web Development",
        description: "Trends and predictions for web development in the next decade.",
        image: "https://media.licdn.com/dms/image/v2/D4D12AQF3PKE9bBKVRA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1684847066360?e=2147483647&v=beta&t=F9de79G7jLt48ZLUWJRALULYbhgVch9ToEHMSzxYsAU",
        },
        {
        id: 5,
        title: "How to Build a Full-Stack App",
        description: "Step-by-step guide on creating a full-stack application.",
        image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1713415059788/d4c6b650-72b5-4fe3-9eb1-7109c835a4b7.png",
        },
        {
        id: 6,
        title: "SEO Best Practices for 2025",
        description: "Optimize your website with the latest SEO techniques.",
        image: "https://www.bthrust.com.my/wp-content/uploads/2024/12/SEO-For-2025-.jpg",
        },
        {
            id: 7,
            title: "React Best Practices",
            description: "React Best Practices for everyone to learn and used.",
            image: "https://iotvnaw69daj.i.optimole.com/cb:mLvy.66914/w:auto/h:auto/q:90/f:best/https://wpshout.com/wp-content/uploads/2019/09/react-best-practices.jpg",
            },
    ];

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          mb: 4,
        }}
      >
        <CardMedia
          component="img"
          height="400"
          image="https://www.beaconmm.com/wp-content/uploads/2021/08/daniel-thomas-gWlBxOAgXgQ-unsplash-scaled.jpg"
          alt="Blog Hero"
          style={{ marginTop:'5em'}}
        />
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Welcome to Our Blog
        </Typography>
      </Box>

      <Typography variant="h4" sx={{ mb: 2 }}>
        Popular Posts
      </Typography>
      <Grid container spacing={3}>
        {popularPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia component="img" height="200" image={post.image} alt={post.title} />
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="contained" color="primary">
          Read More
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
