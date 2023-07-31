import clases from './NewMeetupForm.module.css';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
const NewMeetupForm = ({ onAddMeetup, status, err }) => {
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const image = e.target[1].value;
    const address = e.target[2].value;
    const description = e.target[3].value;
    onAddMeetup({ id: `${Math.random()}`, title, image, address, description });

    router.push('/');
  };
  return (
    <div className={clases.formcontainer}>
      <h3 className={clases.title}>Add Meetup</h3>
      <form onSubmit={submitHandler} className={clases.form}>
        <div className={clases.inputContainer}>
          <h4 className={clases.inputTitle}>Meetup Title</h4>
          <input className={clases.input} required type="text" />
        </div>
        <div className={clases.inputContainer}>
          <h4 className={clases.inputTitle}>Meetup Image</h4>
          <input className={clases.input} required type="text" />
        </div>
        <div className={clases.inputContainer}>
          <h4 className={clases.inputTitle}>Address</h4>
          <input className={clases.input} requiredtype="text" />
        </div>
        <div className={clases.inputContainer}>
          <h4 className={clases.inputTitle}>Description</h4>
          <textarea
            className={clases.textarea}
            required
            rows={20}
            cols={20}
          ></textarea>
        </div>
        <div className={clases.btncontainer}>
          {err && (
            <p style={{ color: 'red', margin: '10px' }}>
              something went wrong!
            </p>
          )}
          <button className={clases.button}>
            {status && !err ? 'Adding...' : 'Add Meetup'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMeetupForm;
