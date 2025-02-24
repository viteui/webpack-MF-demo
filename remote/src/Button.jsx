import React from 'react';

export default ({ children }) => (
    <button
        style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer'
        }}
    >
        {children}
    </button>
);