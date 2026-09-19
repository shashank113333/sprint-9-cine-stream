import axios from 'axios';

const OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY?.trim() || 'df009f39';
const OMDB_BASE_URL = 'https://www.omdbapi.com';

export const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const getPosterUrl = (posterPath) => {
  if (!posterPath || posterPath === 'N/A') return null;
  if (posterPath.startsWith('http')) return posterPath;
  return `${TMDB_IMAGE_BASE_URL}${posterPath}`;
};

const formatOmdbMovie = (item) => ({
  id: item.imdbID,
  title: item.Title,
  release_date: item.Year,
  poster_path: item.Poster && item.Poster !== 'N/A' ? item.Poster : null,
  vote_average: 8.2,
});

const POPULAR_TOPICS = ['Marvel', 'Batman', 'Avengers', 'Spider-Man', 'Action', 'Star Wars', 'Mission'];

export const fetchPopularMovies = async (page = 1) => {
  try {
    const topicIndex = Math.floor((page - 1) / 4) % POPULAR_TOPICS.length;
    const topic = POPULAR_TOPICS[topicIndex];
    const subPage = ((page - 1) % 4) + 1;

    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        apikey: OMDB_API_KEY,
        s: topic,
        page: subPage,
        type: 'movie',
      },
    });

    if (response.data && response.data.Search) {
      return {
        page,
        results: response.data.Search.map(formatOmdbMovie),
        total_pages: 100,
      };
    }
  } catch (err) {
    console.error('OMDb fetch error:', err);
  }

  return { page: 1, results: [], total_pages: 1 };
};

export const searchMovies = async (query, page = 1) => {
  if (!query || !query.trim()) {
    return { results: [], total_pages: 0, page: 1 };
  }

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        apikey: OMDB_API_KEY,
        s: query.trim(),
        page,
        type: 'movie',
      },
    });

    if (response.data && response.data.Search) {
      const total = parseInt(response.data.totalResults, 10) || 10;
      return {
        page,
        results: response.data.Search.map(formatOmdbMovie),
        total_pages: Math.ceil(total / 10),
      };
    }
  } catch (err) {
    console.error('OMDb search error:', err);
  }

  return { results: [], total_pages: 0, page: 1 };
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        apikey: OMDB_API_KEY,
        i: id,
        plot: 'full',
      },
    });

    if (response.data && response.data.Response !== 'False') {
      return {
        id: response.data.imdbID,
        title: response.data.Title,
        year: response.data.Year,
        rated: response.data.Rated,
        released: response.data.Released,
        runtime: response.data.Runtime,
        genre: response.data.Genre,
        director: response.data.Director,
        actors: response.data.Actors,
        plot: response.data.Plot,
        poster_path: response.data.Poster !== 'N/A' ? response.data.Poster : null,
        imdbRating: response.data.imdbRating,
        boxOffice: response.data.BoxOffice,
      };
    }
  } catch (err) {
    console.error('OMDb movie details error:', err);
  }

  return null;
};