import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const data = localStorage.getItem("user");
  const currentUser = JSON.parse(data);
  return (
    <div className='errorPage'>
      <div className='message'>
        <h1>Error 404: Page not found. Let's get you back on track.</h1>
        <div>
          {!currentUser && (
            <Link to="/home">Go Back to Home</Link>
          )}
          {currentUser && (
            <Link to="/feed">Go Back to Feed</Link>
          )}
        </div>
        
      </div>
    </div>
  )
}

export default ErrorPage