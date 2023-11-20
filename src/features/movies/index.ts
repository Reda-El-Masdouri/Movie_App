export interface MovieData {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: Rating[],
    Metascore: string,
    imdbRating: string,
    imdbVote: string,
    imdbID: string,
    Type: string,
    DVD: string,
    BoxeOffice: string,
    Production: string,
    Website: string,
    Response: string
}

export interface Rating {
    Source: string,
    Value: string
}
export interface MovieSearch {  
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

export interface MovieState {
  movies: MovieData[] | MovieSearch[] | undefined
}