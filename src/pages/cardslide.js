import React, { useState } from 'react';

function MyComponent() {
  const [content, setContent] = useState('');

  const handleContentChange = (event) => {
    const inputValue = event.target.value;

    // İçeriği sınırlama işlemi
    if (inputValue.length <= 10) {
      setContent(inputValue);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleContentChange} />
      <p>{content}</p>
    </div>
  );
}
