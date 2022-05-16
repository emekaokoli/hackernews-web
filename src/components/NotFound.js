import React from 'react'
import { Link } from 'react-router-dom'


export const NotFound = () => {
  return (
    <>
      <span
        style={{ color: 'blue', fontSize: '1.5rem' }}
        aria-details='oops wrong page, with pleading face'
      >
        Oops... 🥺, something went wrong.
      </span>
      <Link to='/' style={{ textDecoration: 'none', fontSize: '1.5rem'}}>
        <p aria-label='go back button' >
          click here to go back home or hit the back button to reload ☺️
        </p>
      </Link>
    </>
  );
}
