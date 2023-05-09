import {
  Grid,
  Pagination,
  Stack,
  CardActionArea,
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  Divider,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function RankingPage() {
  const posts = [
    {
      title: "Firebird",
      date: "2021-01-01",
      description:
        "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
      image: "/fire-bird.jpg",
      imageLabel: "Image Label",
      id: 1,
    },
    {
      title: "Firebird",
      date: "2021-01-01",
      description:
        "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
      image: "/fire-bird.jpg",
      imageLabel: "Image Label",
      id: 1,
    },
    {
      title: "Firebird",
      date: "2021-01-01",
      description:
        "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
      image: "/fire-bird.jpg",
      imageLabel: "Image Label",
      id: 1,
    },
    {
      title: "Firebird",
      date: "2021-01-01",
      description:
        "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
      image: "/fire-bird.jpg",
      imageLabel: "Image Label",
      id: 1,
    },
    {
      title: "Firebird",
      date: "2021-01-01",
      description:
        "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
      image: "/fire-bird.jpg",
      imageLabel: "Image Label",
      id: 1,
    },
    {
      title: "Firebird",
      date: "2021-01-01",
      description:
        "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
      image: "/fire-bird.jpg",
      imageLabel: "Image Label",
      id: 1,
    },
  ];

  return (
    <>
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Grid item key={post.title} xs={12}>
            <Link href={"/detail/" + post.id} passHref legacyBehavior>
              <CardActionArea>
                <Card sx={{ display: "flex", p: 1 }} variant="outlined">
                  <CardContent sx={{ flex: 1 }}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      sx={{ mb: 1 }}
                    >
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Rating name="read-only" value={5} readOnly />
                      <Typography variant="subtitle2" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        maxHeight: 100,
                        overflow: "hidden",
                      }}
                    >
                      {post.description}
                    </Typography>
                  </CardContent>

                  <Box
                    sx={{
                      width: 160,
                      display: { xs: "none", sm: "block" },
                      padding: 0,
                      margin: 0,
                      position: "relative",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageLabel}
                      style={{ objectFit: "cover" }}
                      fill
                    />
                  </Box>
                </Card>
              </CardActionArea>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
