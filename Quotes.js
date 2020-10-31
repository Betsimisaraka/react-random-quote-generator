import React from 'react';

function Quotes({ quote }) {
    return (
        <li> 
            <p className="text">"{quote.quoteText}"</p>
        </li>
    )
}

export default Quotes;