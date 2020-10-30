import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SVG = <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
</path></svg>

export const QUOTES = "https://quote-garden.herokuapp.com/api/v2/";

function QuotesRandom() {
    const [quotes, setQuotes] = useState([]);

    const API_QUOTES = "quotes/random";

    const fetchQuotes = async () => {
        try {
            const res = await fetch(QUOTES + API_QUOTES);
            const data = await res.json();
            console.log(data.quote);
            setQuotes(data.quote);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchQuotes();
    }, [])

    return (
        <>
        <button onClick={fetchQuotes} className="next">
                random {SVG}
        </button>
        <div className="container">
            <div className="header">
                <h2 className="quotes">"{quotes.quoteText}"</h2>
                <Link to={`/author/${quotes.quoteAuthor}`}>
                    <button className="quoteAuothor">
                        <div className="author_genre">
                            <p className="author">{quotes.quoteAuthor}</p>
                            <p className="genre">{quotes.quoteGenre} </p>
                        </div>
                        <p className="arrow"> ➡ </p>
                    </button>
                </Link>
            </div>
            
        </div>
        </>
    )
}

export default QuotesRandom;