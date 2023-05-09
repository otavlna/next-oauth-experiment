import { Box, Card, Grid, Rating, Stack, Typography } from "@mui/material";
import admin from "firebase-admin";
import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import Image from "next/image";

export async function getServerSideProps() {
  if (admin.apps.length === 0) {
    initializeApp({
      credential: applicationDefault(),
    });
  }

  const db = getFirestore();

  // const docRef = db.collection("drinks").doc("firebird");
  //   const docRef = db.collection("drinks").doc()

  // await docRef.set({
  //   title: "Firebird",
  //   date: new Date(),
  //   description:
  //     "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
  //   image: "/mango-loco.webp",
  //   imageLabel: "Image Label",
  // });

  // const docRef = db.collection("drinks").doc("firebird");

  // const doc = await docRef.get();
  // console.log(doc);
  // console.log(doc.id);

  // const reviewRef = db.collection("reviews").doc();
  // const review = await reviewRef.set({
  //   date: new Date(),
  //   name:
  // });

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function DetailPage() {
  const drink = {
    title: "Firebird",
    date: "2021-01-01",
    description:
      "TTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionTThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionThis is a descriptionhis is a description",
    image: "/mango-loco.webp",
    imageLabel: "Image Label",
    id: 1,
  };
  const reviews = [
    {
      id: 1,
      date: "2021-01-01",
      name: "Otto von Habsburg",
      rank: "Štamgast",
      rating: 4.5,
      profileImage: "/mango-loco.webp",
      comment:
        "This is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a review",
    },
    {
      id: 1,
      date: "2021-01-01",
      name: "Otto von Habsburg",
      rank: "Štamgast",
      rating: 4.5,
      profileImage: "/mango-loco.webp",
      comment:
        "This is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a review",
    },
    {
      id: 1,
      date: "2021-01-01",
      name: "Otto von Habsburg",
      rank: "Štamgast",
      rating: 4.5,
      profileImage: "/mango-loco.webp",
      comment:
        "This is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a review",
    },
    {
      id: 1,
      date: "2021-01-01",
      name: "Otto von Habsburg",
      rank: "Štamgast",
      rating: 4.5,
      profileImage: "/mango-loco.webp",
      comment:
        "This is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a review",
    },
    {
      id: 1,
      date: "2021-01-01",
      name: "Otto von Habsburg",
      rank: "Štamgast",
      rating: 4.5,
      profileImage: "/mango-loco.webp",
      comment:
        "This is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a review",
    },
    {
      id: 1,
      date: "2021-01-01",
      name: "Otto von Habsburg",
      rank: "Štamgast",
      rating: 4.5,
      profileImage: "/mango-loco.webp",
      comment:
        "This is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a reviewThis is a review",
    },
  ];

  return (
    <>
      <Typography variant="h2" component="h1" sx={{ marginBottom: 2 }}>
        {drink.title}
      </Typography>
      <Grid container spacing={{ xs: 3, md: 10 }}>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" component="p">
            {drink.description}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              minHeight: "300px",
              height: "100%",
              padding: 0,
              margin: 0,
              position: "relative",
            }}
          >
            <Image
              src={drink.image}
              alt={drink.imageLabel}
              style={{ objectFit: "contain" }}
              fill
            />
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="h5"
        component="h3"
        sx={{ marginTop: 5, marginBottom: 1 }}
      >
        Recenze nápoje {drink.title}
      </Typography>
      <Grid container>
        {reviews.map((review) => (
          <Grid item xs={12} md={8} key={review.id}>
            <Card variant="outlined" sx={{ padding: 2, marginY: 1 }}>
              <Stack spacing={1} direction={"row"}>
                <Typography variant="body1" component="p">
                  {review.rank}
                </Typography>
                <Typography variant="body1" component="p">
                  {review.name}
                </Typography>
              </Stack>

              <Stack spacing={1} direction={"row"} sx={{ marginBottom: 1 }}>
                <Typography variant="body1" component="p">
                  {review.date}
                </Typography>
                <Rating readOnly value={review.rating}></Rating>
              </Stack>

              <Typography variant="body1" component="p">
                {review.comment}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
