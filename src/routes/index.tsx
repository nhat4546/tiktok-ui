import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LayoutDefault } from '../layouts';
import { Following, Home, Profile } from '../pages';
import { privateRoutes } from './routes';

function CreateRoute() {
    return (
        <BrowserRouter>
            <Routes>
                {privateRoutes.map((route, idx) => {
                    const Page = route.page;
                    let Layout: any = Fragment;
                    if (route.layout) {
                        Layout = route.layout;
                    }

                    return (
                        <Route
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default CreateRoute;
