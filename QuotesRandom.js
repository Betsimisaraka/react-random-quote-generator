import React, { useEffect, useState } from 'react';

const ALL_QUOTES = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10";

function QuotesRandom() {
    const [quotes, setQuotes] = useState([]);
    console.log(quotes);

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

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <div>
           <h2>"{quotes.quoteText}"</h2>
            <button>
                <p>{quotes.quoteAuthor}</p>
                <p>{quotes.quoteGenre}</p>
            </button>
        </div>
    )
}

export default QuotesRandom;