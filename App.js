import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuotesRandom from './QuotesRandom';
import QuotesList from './QuotesList';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/author/:authorName">
                        <QuotesList />
                    </Route>
                    <Route path="/">
                        <QuotesRandom />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;