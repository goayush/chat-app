import React from 'react';
import PropTypes from 'prop-types';
import { ChatRoomContextProvider } from '@context/ChatRoom';

export function ContextManager({ children }) {
	return <ChatRoomContextProvider>{children}</ChatRoomContextProvider>;
}

ContextManager.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ContextManager;
