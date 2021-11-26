import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import pbAPI from './pb';
import svAPI from './sv';
import wsAPI from './ws';
import hsAPI from './hs';

const Pages = () => {
    return (
        <Router>
            <Route exact path="/" component={pbAPI} />
            <Route path="/sv" component={svAPI} />
            <Route path="/ws" component={wsAPI} />
            <Route path="/hs" component={hsAPI} />
        </Router> );
};
export default Pages;