import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main>
            <h1>404, that's an error.</h1>
            <h2>We couldn't find the requested page.</h2>
            <Link to="/">Link back to the main page.</Link>
        </main>
    ); //todo: make this pretty
}