import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (newFile: File | null) => {
    setFile(newFile);
  };

  const submit = async () => {
    if (file === null || !title || !description) {
      setError("Musíte vyplnit všechna pole");
      return;
    }
    setError("");
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("fileName", file.name);
    data.append("file", file);
    const res = await fetch(
      new URL("/api/energy-drinks", process.env.NEXT_PUBLIC_API_URL),
      {
        method: "POST",
        body: data,
      }
    );
    if (res.ok) {
      router.push("/");
    } else {
      setError("Nastala chyba");
    }
  };

  return (
    <>
      <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
        Přidat energy drink
      </Typography>
      <Stack spacing={2} component="form" sx={{ maxWidth: "400px" }}>
        <TextField
          required
          id="outlined-required"
          label="Název energy drinku"
          value={title}
          onChange={(name) => setTitle(name.target.value)}
        />
        <TextField
          required
          id="outlined-required"
          label="Popis energy drinku"
          multiline
          rows={7}
          value={description}
          onChange={(description) => setDescription(description.target.value)}
        />
        <MuiFileInput
          label="Obrázek energy drinku"
          value={file}
          onChange={handleChange}
        />
        <Button variant="contained" sx={{ maxWidth: "25%" }} onClick={submit}>
          Poslat
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </>
  );
}
