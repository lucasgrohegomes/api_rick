import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map(character => (
        <div className="character-card" key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
