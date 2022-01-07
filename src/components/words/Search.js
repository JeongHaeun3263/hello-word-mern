import React, { useState } from 'react';

const Search = ({ searchWord }) => {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText({ [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (test === '') {
			console.log('put some text');
		} else {
			searchWord(text);
		}
	};

	return (
		<div>
			<form className='form'>
				<input
					type='text'
					name='text'
					placeholder='Search words...'
					value='Search'
					onChange={onChange}
				/>
			</form>
		</div>
	);
};

export default Search;
