import { Fragment } from 'react';
import NewMeetupForm from '../../../public/components/NewMeetupForm';
import { NextApiRequest, NextApiResponse } from 'next';
import Head from 'next/head';
import { useState } from 'react';
const NewMeetup = () => {
  const [status, setStatus] = useState(false);
  const [statuser, setStatuser] = useState(false);

  const enterNewMeetup = async (data) => {
    try {
      setStatus(true);

      const res = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setStatus(false);
      const resData = await res.json();
      console.log(resData);
    } catch (err) {
      setStatuser(true);
    }
  };
  return (
    <Fragment>
      <Head>
        <title>New Meetup Form</title>
      </Head>

      <NewMeetupForm
        onAddMeetup={enterNewMeetup}
        err={statuser}
        status={status}
      />
    </Fragment>
  );
};
export default NewMeetup;
