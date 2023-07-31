import React from 'react';
import Link from 'next/link';
import clases from './layout.module.css';
const Layout = () => {
  return (
    <div className={clases.layoutContainer}>
      <div>
        <h2 className={clases.logo}>Meetups</h2>
      </div>
      <div>
        <ul className={clases.linkConatiner}>
          <li className={clases.link}>
            <p className={clases.page}>
              <Link className={clases.page} href="/">
                All Meetups
              </Link>
            </p>
          </li>

          <li className={clases.link}>
            <p className={clases.page}>
              <Link className={clases.page} href="/new-meetup">
                Add New Meetup
              </Link>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Layout;
