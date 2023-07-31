import React from 'react';
import style from './Meetup.module.css';
import { useRouter } from 'next/router';
const MeetupList = ({ meetups }) => {
  const router = useRouter();

  return (
    <div className={style.meetupcontainer}>
      {meetups.map((item) => {
        return (
          <div key={item.id} className={style.meetuplist}>
            <img className={style.img} src={item.image} />
            <div>
              <h2>{item.title}</h2>
              <p className={style.p}>{item.address}</p>
              <button
                onClick={() => router.push('/' + item.id)}
                className={style.button}
              >
                Show Detail
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeetupList;
