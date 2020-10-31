import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <button onClick={fetchQuotes} className="next button">
                random
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