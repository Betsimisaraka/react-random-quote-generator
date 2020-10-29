import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const ALL_QUOTES = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10";

function QuotesRandom() {
    const [quotes, setQuotes] = useState([]);
    const [author, setAuthor] = useState('');

    const fetchQuotes = async () => {
        const API_QUOTES = "https://quote-garden.herokuapp.com/api/v2/quotes/random";
        try {
            const res = await fetch(API_QUOTES);
            const data = await res.json();
            console.log(data.quote);
            setQuotes(data.quote);
        } catch(err) {
            console.log(err);
        }
    }
    const AUTHOR = `https://quote-garden.herokuapp.com/api/v2/authors/:${quotes.quoteAuthor}?page=1&limit=10`;
    console.log(AUTHOR);

    async function fetchAuthor() {
        try {
            const response = await fetch(API_QUOTES);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setAuthor(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchQuotes();
        fetchAuthor();
    }, []);

    return (
        <div>
           <h2>"{quotes.quoteText}"</h2>
            <button>
                <Link to={`/quote/${quotes.id}`}>
                    <p>{quotes.quoteAuthor}</p>
                    <p>{quotes.quoteGenre}</p>
                </Link>
            </button>
        </div>
    )
}

export default QuotesRandom;