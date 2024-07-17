import React, { useState } from 'react';

const CharacterSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
        placeholder="Digite o nome do personagem" 
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default CharacterSearch;
