import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OverviewPage: React.FC = () => {
    const location = useLocation();


    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/')
        console.log('Logout clicked');
    };
    const isPageActive = (path: string) => {
        return location.pathname === path ? 'text-black' : 'text-gray-300';
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-gray-100 h-screen w-32 p-4">
                <h1 className="font-bold">Overview</h1>
                <hr className="w-full h-5 mt-2" />
                <ul>
                    <li className={`mb-2 ${isPageActive('/overview')}`}>
                        <Link to="/overview" >Overview</Link>
                    </li>
                    <li className={`mb-2 ${isPageActive('/dashboard')}`}>
                        <Link to="/dashboard" >Dashboard</Link>
                    </li>
                    <li className={`mb-2 ${isPageActive('/pairing')}`}>
                        <Link to="/pairing" >Pairing</Link>
                    </li>
                </ul>
                <button
                    className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="bg-gray-300 h-screen w-[40%] p-4">
                Content
            </div>
            <div className="bg-gray-400 h-screen w-[60%] p-4">
                {/* Your video components go here */}
                <div>Video 1</div>
                <div>Video 2</div>
            </div>
        </div>
    );
};

export default OverviewPage;