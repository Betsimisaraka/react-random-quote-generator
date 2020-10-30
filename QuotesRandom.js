import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import QuotesList from './QuotesList';

const ALL_QUOTES = "quotes?page=1&limit=10";
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
        <div className="container">
            <div className="header">
                <h2 className="quotes">"{quotes.quoteText}"</h2>
                <Link to={`/author/${quotes.quoteAuthor}`}>
                    <button className="quoteAuothor">
                        <div className="author_genre">
                            <p>{quotes.quoteAuthor}</p>
                            <p>{quotes.quoteGenre} </p>
                        </div>
                        <p className="arrow"> ➡ </p>
                    </button>
                </Link>
            </div>
            <button onClick={fetchQuotes} className="next">
                randome 🔄
            </button>
        </div>
    )
}

export default QuotesRandom;