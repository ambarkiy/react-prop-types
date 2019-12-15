import React from 'react';

const BeautifullButton = ({ onClick, className, children }) => {
	return (
		<button onClick={onClick} className={className}>
			{children}
		</button>
	);
};

export default BeautifullButton;
