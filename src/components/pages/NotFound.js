import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        width:'auto',
        backgroundColor:'wheat',
      }}
    >
      <h1>Page Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
  );
};

export default NotFound;
