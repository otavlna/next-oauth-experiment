import {
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Head from "next/head";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const sections = [
    { title: "Abecední seznam", url: "/" },
    { title: "Přidat", url: "/add" },
  ];

  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Databáze Energy Drinků</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar>
          <Typography component="h2" variant="h6" color="inherit" noWrap>
            Databáze Energy Drinků
          </Typography>
          <Toolbar component="nav" variant="dense" sx={{ flex: 1 }}>
            {sections.map((section) => (
              <Box key={section.title} sx={{ p: 1 }}>
                <Link href={section.url}>{section.title}</Link>
              </Box>
            ))}
          </Toolbar>

          <IconButton>
            <SearchIcon />
          </IconButton>
          {session ? (
            <>
              Signed in as {session.user!.email}
              <Button variant="outlined" onClick={() => signOut()}>
                Odhlásit se
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                onClick={() => signIn("google", { debug: true })}
              >
                Přihlásit se
              </Button>
            </>
          )}
        </Toolbar>
      </Container>

      <Container sx={{ marginTop: 3 }}>{children}</Container>
    </>
  );
}
