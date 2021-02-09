import React, {useState, createContext} from 'react'

export const MovieContext = createContext();


export const MovieProvider = (props) => {
    const [movies, setMovies] = useState ([
        {
            name: 'James Bond Golden Eye',
            price: '$20',
            id: 32143
        },
        {
            name: 'The Dark Knight',
            price: '$10',
            id: 32123
        },  {
            name: 'Lord Of The Rings',
            price: '$30',
            id: 35143
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}