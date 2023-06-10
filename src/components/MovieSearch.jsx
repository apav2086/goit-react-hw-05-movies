import React, { useState } from 'react';

export default function MovieSearch({setSearchParams}) {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: input.toLowerCase() });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
