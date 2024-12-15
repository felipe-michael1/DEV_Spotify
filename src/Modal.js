import React, { useState } from 'react';
import './Modal.css';  // Importando os estilos

const Modal = ({ isOpen, artist, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(null);

  const handlePlay = (audioUrl, index) => {
    const audio = new Audio(audioUrl);
    if (isPlaying !== index) {
      setIsPlaying(index);
      audio.play();
    } else {
      setIsPlaying(null);
      audio.pause();
    }
  };

  if (!isOpen) return null;  // Se o modal não está aberto, não renderiza nada.

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={onClose}  // Fechar o modal ao clicar fora dele
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}  // Impedir o clique no conteúdo do modal de fechar o modal
      >
        <div className="modal-left">
          <img src={artist.photo} alt={artist.name} className="artist-photo" />
          <h2>{artist.name}</h2>
        </div>
        <div className="modal-right">
          <ul>
            {artist.songs.map((song, index) => (
              <li key={index} className="song-item">
                <span>{song.title}</span>
                <button onClick={() => handlePlay(song.audioUrl, index)}>
                  {isPlaying === index ? 'Pause' : 'Play'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
