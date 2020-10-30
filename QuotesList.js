import React, { useEffect, useState } from 'react';
import { QUOTES } from './QuotesRandom';

function QuotesList({ quotes }) {
    const [author, setAuthor] = useState({});

    async function fetchAuthor() {
        const AUTHOR = `authors/:${quotes.quoteAuthor}?page=1&limit=10`;
        console.log(AUTHOR);
        try {
            const response = await fetch(QUOTES + AUTHOR);
            console.log(response);
            const data = await response.json();
            console.log(data);
            setAuthor(data);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAuthor();
        return () => {};
    }, [quotes]);

    return (
        <div>
            <h3>{author.message}</h3>
            {/* <ul>
               {author.quotes.map(quote => (
                   <li>{quote.id}</li>
               ))}
            </ul> */}
            <p>{author.totalPages}</p>
        </div>
    )
}

export default QuotesList;