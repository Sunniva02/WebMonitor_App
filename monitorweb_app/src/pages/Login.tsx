import React, { useState } from 'react';





const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    const handleLogin = () => {

        console.log('Logging in with:', username, password);
        console.log('Keep me signed in:', keepSignedIn);

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-600">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-2 border rounded mt-1"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="mr-2 "
                                checked={keepSignedIn}
                                onChange={() => setKeepSignedIn(!keepSignedIn)}
                            />
                            <span className="text-gray-600">Keep me signed in</span>
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;


