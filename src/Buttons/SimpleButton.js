import React from 'react';
import { PropTypes } from 'prop-types';

const SimpleButton = ({ onClick, className, children }) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

SimpleButton.defaultProps = {
	className: ''
};

SimpleButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	children: PropTypes.node.isRequired
};

export default SimpleButton;
