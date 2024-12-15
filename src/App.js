import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { FaSpotify, FaBars, FaTimes, FaSearch, FaMicrophone, FaInstagram, FaFacebook, FaTwitter, FaPlay, FaPause } from 'react-icons/fa';
import './App.css';

const Home = () => (
  <div>
    <h2>Artistas mais tocados:</h2>
    <div className="playlist">
      <div className="card">
        <img src="https://www.casadefestas.net/imgsite/colunas/amp-Ana-castela.png" height="150" alt="Playlist" />
        <h3>Ana Castela</h3>
        <p>Siga a playlist de Ana Castela</p>
        <Link to="/artist/Ana Castela">
          <button className="btn-artista">Abrir Artista</button>
        </Link>
      </div>
      <div className="card">
        <img src="https://e-cdns-images.dzcdn.net/images/artist/44b0d909414291a6c693d36f43b3ca4c/500x500-000000-80-0-0.jpg" height="150" alt="Playlist" />
        <h3>Israel e Rodopho</h3>
        <p>Siga a playlist de Israel e Rodolpho</p>
        <button className="btn-artista">Abrir Artista</button>
      </div>
      <div className="card">
        <img src="https://conteudo.imguol.com.br/c/entretenimento/98/2019/10/21/jorge-e-mateus-1571682837251_v2_450x450.jpg" height="150" alt="Playlist" />
        <h3>Jorge e Mateus</h3>
        <p>Siga a playlist de Jorge e Mateus</p>
        <button className="btn-artista">Abrir Artista</button>
      </div>
      <div className="card">
        <img src="https://s2-g1.glbimg.com/68AnWwJMPaC5m1Ju0Q4UrUq6e78=/0x0:1280x977/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/T/8/rEZRI8R7qY8OTIP4XpBw/whatsapp-image-2024-11-14-at-12.26.59.jpeg" height="150" alt="Playlist" />
        <h3>Capital Inicial</h3>
        <p>Siga a playlist de Capital Inicial</p>
        <button className="btn-artista">Abrir Artista</button>
      </div>
      <div className="card">
        <img src="https://i.em.com.br/xP7bA-c8DkFlWVn663lk9UQiJuc=/675x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2022/08/27/1389337/jota-quest_1_57041.jpg" height="150" alt="Playlist" />
        <h3>Jota Quest (Acústico)</h3>
        <p>Siga a playlist de 25 anos de JotaQuest</p>
        <button className="btn-artista">Abrir Artista</button>
      </div>
    </div>

    <h2>Seleção de Rock para você:</h2>
    <div className="playlist">
      {/* Iron Maiden */}
      <div className="card">
        <img src="https://e-cdns-images.dzcdn.net/images/artist/497e5e47668e13a3fb1312a4754eaa65/500x500-000000-80-0-0.jpg" height="150" alt="Iron Maiden" />
        <h3>Iron Maiden</h3>
        <p>Siga a playlist do Iron Maiden</p>
        <button className="btn-artista">Abrir Artista</button>
      </div>
      {/* Outros artistas... */}
    </div>
  </div>
);

const Favorites = () => (
  <div>
    <h2>Favoritos</h2>
    <p>
		Aqui estão suas músicas favoritas!
	</p>
	<p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	</p>
  </div>
);

const About = () => (
  <div>
    <h2>Sobre</h2>
    <p>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	</p>
  </div>
);

// Componente ArtistPage
const ArtistPage = () => {
  const { artistName } = useParams(); // Obtém o nome do artista da URL
  const [isPlaying, setIsPlaying] = useState(false); // Controla se a música está tocando
  const navigate = useNavigate();
  const [songs, setSongs] = useState([
    // Retornar músicas do Python
    'Música 1', 'Música 2', 'Música 3', 'Música 4'
  ]);

const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

 const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };


 return (
      <div className="artist-page">
      <div className="artist-info">
        <h2>{artistName}</h2>
        <img
          src={`https://www.casadefestas.net/imgsite/colunas/amp-Ana-castela.png`} // Foto do artista
          alt={artistName}
          className="artist-image"
        />
      </div>

      <div className="artist-songs">
        <h3>Top Músicas:</h3>
        <ul>
          {songs.map((song, index) => (
            <li key={index} className="song-item">
              <span>{song}</span>
              <button 
                onClick={handlePlayPause} 
                className="play-pause-button"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
            </li>
          ))}
        </ul>
      </div>

		{/* Botão de Voltar */}
      <button className="back-button" onClick={handleBackClick}>
        Voltar
      </button>
  
    </div>
  );
};

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Pesquisa:', searchTerm);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <FaSpotify size={40} color="#1DB954" />
            <h1>_Dev Músicas</h1>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favorites">Favoritos</Link></li>
              <li><Link to="/about">Sobre</Link></li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Buscar música..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              <FaSearch />
            </button>
            <button type="button" className="voice-button">
              <FaMicrophone />
            </button>
          </form>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
			<Route path="/artist/:artistName" element={<ArtistPage />} /> {/* Rota para a página do artista */}
          </Routes>
        </main>

        <footer className="footer">
          <div className="social-links">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
          </div>
          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/favorites">Favoritos</Link></li>
              <li><Link to="/about">Sobre</Link></li>
            </ul>
          </div>
          <div className="copyright">
            <p>&copy; 2024 _Dev Músicas. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
