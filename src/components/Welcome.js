import React from 'react';

import { Jumbotron } from 'react-bootstrap';

const Welcome = () => {
    return (
        <Jumbotron>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><a href="/login" className="btn btn-primary">Login</a></p>
        </Jumbotron>
    );
}

export default Welcome;