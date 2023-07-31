// // pages/api/db-connect.js

// import connectDB from '../../../db/connect';
// import Meetup from '../../../models/meetup';
// // pages/api/new-meetup.js
// // import connectDB from '../../db/connect';
// // import Meetup from '../../models/meetup'; // Replace 'meetup' with your MongoDB model

// connectDB();

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).end(); // Method Not Allowed
//   }

//   const { title, image, address, description } = req.body;

//   try {
//     const newMeetup = new Meetup({
//       title,
//       image,
//       address,
//       description,
//     });

//     await newMeetup.save();
//     return res.status(201).json({ message: 'Meetup created successfully' });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ error: 'Failed to create meetup' });
//   }
// }
// import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await MongoClient.connect(
      'mongodb+srv://meetups:05hOtQxLI4X4KqYF@cluster0.caj9b8u.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();
    const meetupCollections = db.collection('meetups');
    const result = await meetupCollections.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: 'Meetup Inserted' });
  }
};
export default handler;
