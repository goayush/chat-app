import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, PageNotFound } from '@page/index';
import { appRoute } from '@config/globalConstant';

export function AppRoutes() {
	return (
		<Routes>
			<Route path={appRoute.HOME} element={<Home />} />
			<Route path={appRoute.PAGE_NOT_FOUND} element={<PageNotFound />} />
		</Routes>
	);
}

export default AppRoutes;
