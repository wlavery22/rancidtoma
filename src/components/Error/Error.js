import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div>
				<h2>Page not Found</h2>
			<Link to="/">
				<h3>Click this to head back home!</h3>
			</Link>
		</div>
	)
}

export default Error;