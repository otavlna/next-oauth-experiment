import { randomUUID } from "crypto";
import * as admin from "firebase-admin";
import { Form } from "multiparty";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
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

    try {
      const form = new Form();
      form.parse(req, async (err, fields, files) => {
        console.log(files);
        if (err) {
          console.error(err);
          res.status(500).send({});
          return;
        }

        const date = new Date();
        const filePath = files.file[0].path;
        console.log(filePath);
        storage
          .bucket(process.env.FIREBASE_STORAGE_BUCKET as string)
          .upload(filePath);

        const docRef = db.collection("drinks").doc(fields.title[0] as string);
        await docRef.set({
          title: fields.title[0],
          date,
          description: fields.description[0],
          image: filePath.split("/").pop() as string,
          imageLabel: `Image of ${fields.title[0]}`,
        });
        res.status(201).send({});
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({});
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
