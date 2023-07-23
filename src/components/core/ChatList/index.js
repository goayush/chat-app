import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useChatRoom } from '../../../context/ChatRoom';
import { CreateRoomModal } from './CreateRoomModal';

export function ChatList() {
	// Context
	const { chatRoom } = useChatRoom();

	// State
	const [createRoomModal, setCreateRoomModal] = useState(false);

	return (
		<Container className="p-0">
			<Row>
				<Col>
					<Button className="my-3" onClick={() => setCreateRoomModal(true)}>
						Add Room
					</Button>

					{chatRoom.length > 0 ? (
						<div className="room-list">
							<div className="input-group mb-3">
								<Form.Control type="text" id="inputPassword5" placeholder="Search.." />
							</div>

							<ul className="chat-list mt-2 mb-0">
								{chatRoom.map((room, index) => {
									return (
										<li className="clearfix" key={`user-${index}`}>
											{/* <img src={user.avatar} alt="avatar" /> */}
											<div className="about">
												<div className="name">{room.name}</div>
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					) : (
						<div className="py-3 px-0">
							<h3>No Rooms!</h3>
						</div>
					)}
				</Col>
			</Row>

			{createRoomModal && <CreateRoomModal setCreateRoomModal={setCreateRoomModal} />}
		</Container>
	);
}

export default ChatList;
