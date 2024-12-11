import { number, string } from 'prop-types';
import { useState } from 'react';

// The Movie Component is receiving the id, title, genre, year, description and the method to delete the movie
const Movie = ({ id, title, genre, year, description, deleteMovie }) => {

    // For each of the genres, let's use a different background color
    const bgColor = genre==='Action'?'text-bg-danger': 
                    genre==='Comedy'?'text-bg-success': 
                    genre==='Romance'?'text-bg-warning':
                    genre==='War'?'text-bg-secondary':'text-bg-dark';

    // Declaring a boolean to show or hide the description
    const [showDescription, setShowDescription] = useState(false);

    // Displaying the movie's title, a button to delete the movie, a badge for the genre, a badge for the year, a button to show/hide the description and the description
    return (
        <li className="lead list-group-item px-5 pt-3 pb-3">{title} 
            <button onClick={() => deleteMovie(id)} type="button" className="btn-close float-end" aria-label="Close"></button><br/>
            <span className={`badge rounded-pill ${bgColor}`}>{genre}</span>&nbsp;
            <span className="badge rounded-pill text-bg-info">{year}</span><br/>
            <div className='m-3'>
                {showDescription && (<><p className='fs-6'>{description}</p></>)}
            <button className='btn btn-outline-info' onClick = {() => setShowDescription(!showDescription)}>
                {showDescription ? 'Hide Description' : 'Show Description'}</button>
            </div>
        </li>
    );
}

// Prop Types
Movie.propTypes = {
    id: number,
    title: string,
    genre: string,
    year: number,
    description: string
}

export default Movie;
