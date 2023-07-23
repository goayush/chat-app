import React from 'react';
import './index.scss';
import { ThemeProvider } from 'react-bootstrap';
import PropTypes from 'prop-types';

export function AppThemeProvider({ children }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}

AppThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AppThemeProvider;
