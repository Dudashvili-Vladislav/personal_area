import React, {FC} from 'react';
import {privateRoutes, publicRoutes, publicRoutesEnum} from "../constants/routes";
import {BrowserRouter, Routes, Navigate, Route} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";


export const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.user)
    console.log(isAuth)
    return (
        <BrowserRouter>
            {isAuth ? (
                <div>
                    <Routes>
                        {privateRoutes.map((route, i) => (
                            <Route
                                element={<route.component/>}
                                path={route.exact ? route.path : `${route.path}/*`}
                                key={i}
                            />
                        ))}
                        <Route path="*" element={<Navigate to="/users"/>}/>
                    </Routes>

                </div>
            ) : (
                <Routes>
                    {publicRoutes.map((route, i) => (
                        <Route
                            element={<route.component/>}
                            path={route.exact ? route.path : `${route.path}/*`}
                            key={i}
                        />
                    ))}
                    <Route
                        path="*"
                        element={<Navigate to={publicRoutesEnum.authorization}/>}
                    />
                </Routes>
            )

            }
        </BrowserRouter>

    );
};


