import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SVG } from './QuotesRandom'

const URL_API = "https://quote-garden.herokuapp.com/api/v2/authors/";
const PAGE = "?page=1&limit=10";

function QuotesList() {
    const [author, setAuthor] = useState([]);
    const { authorName } = useParams();

    async function fetchAuthor() {
        try {
            const response = await fetch(URL_API + authorName + PAGE);
            console.log(response);
            const data = await response.json();
            console.log(data.quotes);
            setAuthor(data.quotes);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAuthor();
    }, []);

    return (
        <>
            <Link to="/">
                <button className="next">
                    random {SVG}
                </button>
            </Link>
            <div className="list_container">
                <p className="name">{authorName}</p>
                <ul>
                    {author.map(quote =>
                        <li key={quote.id}>
                            <p className="text">"{quote.quoteText}"</p>
                        </li>
                    )}
                </ul>
            </div>
        </>
    )
}

export default QuotesList;