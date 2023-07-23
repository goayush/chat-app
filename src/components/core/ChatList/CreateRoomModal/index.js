import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { users } from '@config/globalConstant';

export function CreateRoomModal({ setCreateRoomModal }) {
	const handleClose = () => setCreateRoomModal(false);

	return (
		<Modal show onHide={handleClose} backdrop="static" keyboard={false}>
			<Modal.Header closeButton>
				<Modal.Title>Create Room</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form.Control type="text" placeholder="Room Name" className="mb-3" />
				<Form.Select aria-label="Default select example">
					<option>Select Users</option>
					{users.map((user, index) => {
						return (
							<option value={user.id} key={`user-${index}`}>
								{user.name}
							</option>
						);
					})}
				</Form.Select>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary">Create</Button>
			</Modal.Footer>
		</Modal>
	);
}

CreateRoomModal.propTypes = {
	setCreateRoomModal: PropTypes.func.isRequired,
};

export default CreateRoomModal;
