import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const WordAddForm = ({ onAdd }) => {
	const formRef = React.createRef();
	const inputTitleRef = React.createRef();
	const inputFormRef = React.createRef();
	const inputMeaningRef = React.createRef();

	const onSubmit = (e) => {
		console.log('submitted');
		e.preventDefault();
		const title = inputTitleRef.current.value;
		const form = inputFormRef.current.value;
		const meaning = inputMeaningRef.current.value;
		title && onAdd(title, form, meaning);
		console.log(title);
		formRef.current.reset();
	};

	return (
		<Box component='form' ref={formRef}>
			<div className='word__add__form'>
				<input
					ref={inputTitleRef}
					type='text'
					placeholder='Enter a form...'
					required
				/>
				<select ref={inputFormRef}>
					<option value='form'>select the form</option>
					<option value='none'>none</option>
					<option value='verb'>verb</option>
					<option value='adjective'>adjective</option>
					<option value='none'>adverb</option>
				</select>

				<input
					ref={inputMeaningRef}
					type='text'
					placeholder='Enter a meaning...'
				/>
			</div>
			<Button onClick={onSubmit} variant='contained'>
				Save
			</Button>
		</Box>
	);
};

export default WordAddForm;
