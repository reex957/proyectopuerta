import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../public/pages/Home';
import Login from '../public/auth/Login';
import Registro from '../public/auth/Registro';
import Cuenta from '../public/user/Cuenta';
import Productos from '../public/pages/Productos';
import QuienesSomos from '../public/pages/QuienesSomos';
import Faq from '../public/pages/Faq';
import Contacto from '../public/pages/Contacto';
import Producto from '../public/pages/Producto';
import Users from '../public/admin/Users';
import ProductsA from '../public/admin/Products';
import NotFoundPage from '../public/pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';
import Dashboard from '../public/user/iot/Dashboard';
import Devices from '../public/user/iot/Devices';
import IoTLayout from '../layouts/IoTLayout';
import DeviceU from '../public/user/iot/DeviceU';
import P1 from '../public/pages/PrivatePolicy';
import TS from '../public/pages/TermService';

export default function AppRouter() {

    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.catalogo} element={<Productos />} />
            <Route path={routes.detalleProducto} element={<Producto />} />
            <Route path={routes.quienesSomos} element={<QuienesSomos/>} />
            <Route path={routes.faq} element={<Faq />} />
            <Route path={routes.contacto} element={<Contacto />} />
            <Route path={routes.p1} element={<P1/>} />
            <Route path={routes.ts} element={<TS/>} />
            <Route element={<PublicRoute />}>
                <Route path={routes.login} element={<Login />} />
                <Route path={routes.registro} element={<Registro />} />
            </Route>
            <Route element={<PrivateRoute/>}>
                <Route path={routes.perfil} element={<Cuenta />} />
            </Route>
            <Route element={<PrivateRoute hasRole={roles.regular}/>}>
                
                <Route path={routes.iotU} element={<IoTLayout />} >
                    <Route path={routes.iotDashboardU} element={<Dashboard />} />
                    <Route path={routes.iotDevicesU} element={<Devices />} />
                    <Route path={routes.iotDeviceU} element={<DeviceU />} />
                </Route>
            </Route>
            <Route element={<PrivateRoute hasRole={roles.admin} />}>
                <Route path={routes.usuariosA} element={<Users />} />
                <Route path={routes.productsA} element={<ProductsA />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}
