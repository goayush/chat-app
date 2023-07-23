import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@config/AppRoutes';
import { AppThemeProvider } from '@theme/index';
import { ContextManager } from '@config/ContextManager';

export function App() {
	return (
		<BrowserRouter>
			<AppThemeProvider>
				<ContextManager>
					<AppRoutes />
				</ContextManager>
			</AppThemeProvider>
		</BrowserRouter>
	);
}

export default App;
