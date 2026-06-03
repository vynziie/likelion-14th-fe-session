import react from 'react';

function Moviecard ({movie, onAddToFavorites, isFavorites}){
    return (
        <div className="movie-card">
            <img
                src = {movie.poster}
                alt = {movie.title}
                className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <button
                onClick={() => onAddToFavorites(movie)}
                disabled={isFavorites}
                className={`favorite-button ${isFavorites ? 'disabled' : ''}`}
            >
                {isFavorites ? '❤️ 찜' : '🤍 찜하기'}
            </button>
        </div>
    );
}

export default Moviecard;