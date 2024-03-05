import React, { useState } from 'react';

import ModalMovie from '../ModalMovie/ModalMovie';

export default function Movie({ movie }) {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddToFavorites = () => {

    console.log(`Added ${movie.title} to favorites`);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
        <button onClick={handleOpenModal}>View Details</button>
      </div>
      {isModalOpen && <ModalMovie movie={movie} onClose={handleCloseModal} />}
    </div>
  );
}
