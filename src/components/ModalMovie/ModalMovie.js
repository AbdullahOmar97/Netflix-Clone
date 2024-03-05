import React, { useState } from 'react';
import axios from 'axios';

export default function ModalMovie({ movie, onClose }) {

  const [comment, setComment] = useState('');

  const handleAddToFavorite = async () => {
    try {

        const response = await axios.post('https://movies-library-6xb2.onrender.com/addMovie', {
        movieData: {
          name: movie.title,
          img: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          comment: comment,
        },
      });

      console.log('Movie added to favorites:', response.data);

      onClose();
    } catch (error) {
      console.error('Error adding movie to favorites:', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <p>Add a comment:</p>
        <textarea
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleAddToFavorite}>Add to Favorites</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
