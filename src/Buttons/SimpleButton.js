import React from 'react';

const SimpleButton = ({ onClick, className, children }) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export default SimpleButton;
