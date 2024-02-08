import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { ErrorResponse } from '@remix-run/router';

const ErrorPage: React.FC = () => {
    const error = useRouteError() as ErrorResponse;
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Oops!</h1>
            <p className="text-lg mb-2">Sorry, we can't find the page.</p>
            <p className="text-sm text-gray-500 mb-4">
                {error.statusText || (error as any)?.error?.message}
            </p>
            <button
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                onClick={() => navigate('/overview')}
            >
                Go back home
            </button>
        </div>
    );
};

export default ErrorPage;

