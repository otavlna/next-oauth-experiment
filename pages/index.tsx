import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import * as admin from "firebase-admin";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
      }),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
  }
  const db = admin.firestore();
  const storage = admin.storage();

  const drinkCollection = await db
    .collection("drinks")
    .orderBy("date", "desc")
    .get();

  const drinks = drinkCollection.docs.map((doc) => {
    const drink = doc.data();
    return {
      ...drink,
      date: drink.date.toDate().toISOString(),
      image: `https://firebasestorage.googleapis.com/v0/b/${process.env.FIREBASE_STORAGE_BUCKET}/o/${drink.image}?alt=media`,
    };
  });

  return { props: { drinks } };
}

type Props = {
  drinks: Drink[];
};

type Drink = {
  title: string;
  id: string;
  date: string;
  description: string;
  image: string;
  imageLabel: string;
};

export default function RankingPage({ drinks }: Props) {
  return (
    <>
      <Grid container spacing={4}>
        {drinks.map((drink) => (
          <Grid item key={drink.title} xs={12}>
            <Link href={"/detail/" + drink.id} passHref legacyBehavior>
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
                        {drink.title}
                      </Typography>
                      <Rating name="read-only" value={5} readOnly />
                      <Typography variant="subtitle2" color="text.secondary">
                        {drink.date}
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body1"
                      sx={{
                        maxHeight: 100,
                        overflow: "hidden",
                      }}
                    >
                      {drink.description}
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
                      src={drink.image}
                      alt={drink.imageLabel}
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
