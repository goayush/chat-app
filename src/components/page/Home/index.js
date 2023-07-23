import React from 'react';
import './index.css';
import { Col, Container, Row } from 'react-bootstrap';
import { ChatList, ChatArea } from '@core/index';

export function Home() {
	return (
		<Container>
			<Row>
				<Col sm={3}>
					<ChatList />
				</Col>
				<Col sm={9} className="">
					<ChatArea />
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
