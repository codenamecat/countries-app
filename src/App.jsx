import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';

import Layout from './components/Layout';
import CountryInfoLong from './components/CountryInfoLong';
import CountryList from './components/CountryList';
import Error from './components/Error';

function App() {
    const [darkMode, setDarkMode] = React.useState(
        localStorage.getItem('darkTheme')
    );

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path='/'
                element={
                    <Layout darkMode={darkMode} setDarkMode={setDarkMode} />
                }
            >
                <Route index element={<CountryList darkMode={darkMode} />} />
                <Route
                    path=':country'
                    element={<CountryInfoLong darkMode={darkMode} />}
                    errorElement={<Error darkMode={darkMode} />}
                />
            </Route>
        )
    );

    return (
        <RouterProvider
            router={router}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
        />
    );
}

export default App;