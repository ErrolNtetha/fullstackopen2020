import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
	return (
		<>
			<h1> Greetings...</h1>
			<App />
		</>
	)
}

const App = () => {
	const now = new Date()
	
	return (
		<div>
			<p> Hello world! It is now {now.toString()} </p>
		</div>
	)
}

ReactDOM.render(<Hello />, document.getElementById('root'));