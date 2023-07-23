import React from 'react';
import PropTypes from 'prop-types';

export function Avatar({ name }) {
	return (
		<h2
			className="bg-info text-white"
			style={{ borderRadius: '50px', width: '55px', height: '55px', paddingTop: '7px', paddingLeft: '5px' }}
		>
			{name
				.split(' ')
				.map((str) => str[0])
				.join('')}
		</h2>
	);
}

Avatar.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Avatar;
