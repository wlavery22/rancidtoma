import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {

	return (
		<div className='errorPage'>
				<h2>Page not Found</h2>
			<Link to="/">
				<h3 >Click here to head back home!</h3>
			</Link>
		</div>
	)
}

export default Error;