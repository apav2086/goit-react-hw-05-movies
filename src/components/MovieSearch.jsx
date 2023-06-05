import { useState } from 'react';

export default function MovieSearch(props) {
  const [input, setInput] = useState('');

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.setSearch(input);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
