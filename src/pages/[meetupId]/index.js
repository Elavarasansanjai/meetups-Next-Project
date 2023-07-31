import { Fragment } from 'react';
import clases from './meetupDetail.module.css';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';

const { useRouter } = require('next/router');

const MeetupDetail = ({ meetupData }) => {
  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
      </Head>
      <div className={clases.meetupDetailContainer}>
        <img src={meetupData.image} alt="meetup image" />
        <h2>{meetupData.title}</h2>
        <p>{meetupData.address}</p>
        <p>{meetupData.description}</p>
        <button>Edite Meetup</button>
      </div>
    </Fragment>
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://meetups:05hOtQxLI4X4KqYF@cluster0.caj9b8u.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const clientConnect = db.collection('meetups');
  const meetups = await clientConnect.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect(
    'mongodb+srv://meetups:05hOtQxLI4X4KqYF@cluster0.caj9b8u.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const clientConnect = db.collection('meetups');
  const meetups = await clientConnect.findOne({ _id: new ObjectId(meetupId) });
  client.close();
  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        address: meetups.address,
        title: meetups.title,
        description: meetups.description,
        image: meetups.image,
      },
    },
  };
}
export default MeetupDetail;
