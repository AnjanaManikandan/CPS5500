const App2 = (props) => {
    const movieData = [
	{ id: 17, title: "American Beauty", year: 1999 },
	{ id: 651, title: "Sense and Sensibility", year: 1995 },
	{ id:1144, title: "Casablanca", year:1942 }
    ];
    return (
	    <main>
	    <Title label="Iterating a Props Array" />
	    <MovieList movies={movieData} />
	    </main>
    );
}
const MovieList = (props) => {
    return (
	    <ul>
	    { props.movies.map( m => <MovieListItem movie={m} key={m.id} />)}
	</ul>
    );
}
const MovieListItem = (props) => {
    return <li>{props.movie.title}</li>;
}
const Title = function(props) {
    return <h2>{props.label}</h2>;
};
export { App2, MovieList, MovieListItem, Title };
//ReactDOM.render(<App />, document.querySelector('#react-container'));
