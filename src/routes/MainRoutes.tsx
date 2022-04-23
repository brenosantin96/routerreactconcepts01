import { Route, Routes, useRoutes } from 'react-router-dom'
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { AboutItem } from '../pages/AboutItem';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from '../requireAuth';

export const MainRoutes = () => {

    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/sobre', element: <RequireAuth><About /></RequireAuth> },
        { path: '/sobre/:slug', element: <AboutItem /> },
        { path: '*', element: <NotFound /> },
    ]);


    /* return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={
                <RequireAuth>
                    <About />
                </RequireAuth>
            } />
            <Route path='/sobre/:slug' element={<AboutItem />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

    ); */
}