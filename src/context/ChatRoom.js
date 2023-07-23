import React, { createContext, useContext, useMemo, useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

export const ChatRoomContext = createContext();

export function ChatRoomContextProvider({ children }) {
	// state
	const [activeChatRoom, setActiveChatRoom] = useState('');
	const [chatRoom, setChatRoom] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// setting state on creating new chat room
	const chatRoomInitialValues = {
		name: '',
		users: {},
	};
	const chatRoomValdations = Yup.object().shape({
		name: Yup.string().min(3, 'Too Short!').max(10, 'Too Long!').required('Required'),
		users: Yup.object().shape({ id: Yup.string().required('Required') }),
	});
	const [chatRoomForm, setChatRoomForm] = useState(chatRoomInitialValues);

	// functions
	// validate form & store chatroom details in local db
	const onCreateNewChatRoom = async (values) => {
		try {
			setIsLoading(true);
			const { name, users } = values;

			// check if room name is already registered
			const isRoomNameAvailable = chatRoom.some((room) => room.name === name);

			// storing details
			if (!isRoomNameAvailable) {
				chatRoom.push({ name, users });
				setChatRoom([...chatRoom]);
				localStorage.setItem('chatRooms', JSON.stringify(chatRoom));
				alert('Chat room created successfully..');
				setIsLoading(false);
			} else {
				alert('Room name already exist!!');
			}

			setIsLoading(false);
			return true;
		} catch (error) {
			console.log(error);
			setIsLoading(false);
			return false;
		}
	};

	// wraping stuff in useMemo
	const contextPayload = useMemo(
		() => ({
			// states
			activeChatRoom,
			setActiveChatRoom,
			chatRoom,
			setChatRoom,
			isLoading,
			setIsLoading,

			// form states
			chatRoomForm,
			setChatRoomForm,

			// form initial states & validations
			chatRoomInitialValues,
			chatRoomValdations,

			// functions
			onCreateNewChatRoom,
		}),
		[
			// states
			activeChatRoom,
			setActiveChatRoom,
			chatRoom,
			setChatRoom,
			isLoading,
			setIsLoading,

			// form states
			chatRoomForm,
			setChatRoomForm,

			// form initial states & validations
			chatRoomInitialValues,
			chatRoomValdations,

			// functions
			onCreateNewChatRoom,
		]
	);

	return <ChatRoomContext.Provider value={contextPayload}>{children}</ChatRoomContext.Provider>;
}

ChatRoomContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useChatRoom = () => useContext(ChatRoomContext);

export default ChatRoomContext;
