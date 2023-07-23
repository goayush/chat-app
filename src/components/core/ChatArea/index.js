import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useChatRoom } from '@context/ChatRoom';
import { Avatar } from '../Avatar';

export function ChatArea() {
	let roomInfo = { name: 'Room Name', users: {} };

	// Context
	const { chatRoom, activeChatRoom } = useChatRoom();

	// State
	const [activeUsers, setActiveUsers] = useState(0);

	useEffect(() => {
		if (chatRoom.length > 0) {
			roomInfo = chatRoom.find((room) => room.name === activeChatRoom);
			setActiveUsers(roomInfo?.users.filter((user) => user.status === 'online').length);
		}
	}, [activeChatRoom]);

	return (
		<Container className="chat">
			<Row className="chat-header">
				<Col>
					<Avatar name={roomInfo.name} />
					<div className="chat-about">
						<small>Active Users: {activeUsers}</small>
					</div>
				</Col>
			</Row>
			<Row className="chat-history p-4">
				<ul className="m-b-0">
					<li className="clearfix">
						<div className="message other-message float-right">
							{' '}
							Hi Aiden, how are you? How is the project coming along?{' '}
						</div>
					</li>
					<li className="clearfix">
						<div className="message-data">
							<span className="message-data-time">Ayush,</span>
							<span className="message-data-time">10:12 AM, Today</span>
						</div>
						<div className="message my-message">Are we meeting today?</div>
					</li>
					<li className="clearfix">
						<div className="message-data">
							<span className="message-data-time">10:15 AM, Today</span>
						</div>
						<div className="message my-message">Project has been already finished and I have results to show you.</div>
					</li>
				</ul>
			</Row>
			<Row className="chat-message clearfix">
				<Col className="input-group mb-0">
					<input type="text" className="form-control" placeholder="Send Message.." />
				</Col>
			</Row>
		</Container>
	);
}

export default ChatArea;
