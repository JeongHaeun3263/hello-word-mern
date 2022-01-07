import React from 'react';

const About = () => {
	return (
		<div>
			<h1>Hello Word</h1>
			<p>App to study words</p>
			<p>Version 1.0.0</p>
			<p>{new Date().getFullYear()} Haeun Grace Jeong - All rights reserved</p>
		</div>
	);
};

export default About;
