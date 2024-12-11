import React, { useState } from 'react';
import Movie from './Movie';

const MoviesList = () => {
    // Declaring the database of movies with attributes id, title, genre, year, and description
    const [movies, setMovies] = useState([
        {id:1, title:'The Godfather', genre:'Action', year: 1972, description: "Widely regarded as one of the greatest films of all time, this mob drama, based on Mario Puzo's novel of the same name, focuses on the powerful Italian-American crime family of Don Vito Corleone (Marlon Brando)."}, 
        {id:2, title:'Casablanca', genre:'Romance', year: 1942, description: "Rick Blaine (Humphrey Bogart), who owns a nightclub in Casablanca, discovers his old flame Ilsa (Ingrid Bergman) is in town with her husband, Victor Laszlo (Paul Henreid). Laszlo is a famed rebel, and with Germans on his tail, Ilsa knows Rick can help them get out of the country."}, 
        {id:3, title:"Schindler's List", genre:'War', year: 1939, description: "Businessman Oskar Schindler arrives in Krakow in 1939, ready to make his fortune from World War II. After joining the Nazi party primarily for political expediency, he staffs his factory with Jewish workers for pragmatic reasons. When the extermination of Jews begins, Schindler arranges to protect his workers to keep his factory in operation, but soon realizes that in so doing, he is also saving innocent lives."},
        {id:4, title:"Citizen Kane", genre:'Action', year: 1941, description: "When a reporter is assigned to decipher newspaper magnate Charles Foster Kane's (Orson Welles) dying words, his investigation gradually reveals the fascinating portrait of a complex man who rose from obscurity to staggering heights."},
        {id:5, title:"The Dark Knight", genre:'Action', year: 2008, description: "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism."},
        {id:6, title:"The Shawshank Redemption", genre:'Thriller', year: 1994, description: "Andy Dufresne (Tim Robbins) is sentenced to two consecutive life terms in prison for the murders of his wife and her lover and is sentenced to a tough prison. Only he knows he didn't commit the crimes. While there, he forms a friendship with Red (Morgan Freeman), experiences brutality of prison life over the course of 19 years."},
        {id:7, title:"Forest Gump", genre:'Comedy', year: 1994, description: "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright)."},
        {id:8, title:"Fight Club", genre:'Comedy', year: 1999, description: "A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed. The two bored men form an underground club with strict rules and fight other men who are fed up with their mundane lives. Their perfect partnership frays when Marla (Helena Bonham Carter), a fellow support group crasher, attracts Tyler's attention."},
        {id:9, title:"Inception", genre:'Action', year: 2010, description: "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move."},
        {id:10, title:"When Harry Met Sally", genre:'Comedy', year: 1989, description: "In 1977, college graduates Harry Burns (Billy Crystal) and Sally Albright (Meg Ryan) share a contentious car ride from Chicago to New York, during which they argue about whether men and women can ever truly be strictly platonic friends. Ten years later, Harry and Sally meet again at a bookstore, and in the company of their respective best friends, Jess (Bruno Kirby) and Marie (Carrie Fisher), attempt to stay friends without sex becoming an issue between them."}
    ]);

    // Declaring a genre filter. When the filter is changed, the genre filter is changed
    let [genreFilter, setGenreFilter] = useState('none');
    const changeGenreFilter = () => {
        setGenreFilter(document.getElementById('genreFilter').value);
    };

    // A function to delete the movie based on the id
    const deleteMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }
    
    // Display the header, the genre filter select menu, and the list of movies filtered using the genre filter
    return (
        <div className="border border-info rounded p-3 mt-5">
            <h2 className="text-center">Best Movies of All Time</h2>
            <div className='col-3 mb-3'>
                <label className="form-label">Filter by Genre</label>
                <select onChange={changeGenreFilter} className="form-select form-select-lg mb-3" aria-label="Filter by Genre" name="genreFilter" id="genreFilter">
                    <option value="none">No Filter</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="romance">Romance</option>
                    <option value="thriller">Thriller</option>
                    <option value="war">War</option>
                </select>
            </div>
            
            <ul className="list-group px-5 max-width-1">
                {movies.map((movie)=>(
                    ((genreFilter=='none' || movie.genre.toLowerCase()==genreFilter)?
                        <Movie key={movie.id} id={movie.id} title={movie.title} genre={movie.genre} year={movie.year} description={movie.description} deleteMovie={deleteMovie}/>
                        :"")  
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;