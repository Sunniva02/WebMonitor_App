import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './systems/routes';

interface AppProps { }

const App: React.FC<AppProps> = () => {
  return <RouterProvider router={router} />;
};

export default App;