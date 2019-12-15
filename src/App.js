import React from 'react';
import { SimpleButton } from './Buttons';
import './App.css';

const logClick = () => console.log('simple button clicked');

function App() {
	return (
		<SimpleButton onClick={logClick} className='Simple'>
			Click me
		</SimpleButton>
	);
}

export default App;
