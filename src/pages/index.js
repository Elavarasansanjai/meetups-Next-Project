import { Fragment } from 'react';
import MeetupList from '../../public/components/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const HomePage = ({ meetups }) => {
  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
      </Head>

      <MeetupList meetups={meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://meetups:05hOtQxLI4X4KqYF@cluster0.caj9b8u.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();
  const clientConnect = db.collection('meetups');
  const meetups = await clientConnect.find().toArray();
  const meetupData = meetups.map((meetups) => {
    return {
      id: meetups._id.toString(),
      title: meetups.title,
      image: meetups.image,
      address: meetups.address,
    };
  });

  return {
    props: {
      meetups: meetupData,
    },
    revalidate: 1,
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DummyList,
//     },

//   };
// }

export default HomePage;
