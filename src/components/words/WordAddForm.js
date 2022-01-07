import { Button, Grid, Input, TextField } from '@mui/material';
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
			<input
				ref={inputTitleRef}
				type='text'
				placeholder='Enter a form...'
				required
			/>
			<input ref={inputFormRef} type='text' placeholder='Enter a form...' />
			<input
				ref={inputMeaningRef}
				type='text'
				placeholder='Enter a meaning...'
			/>
			<Button onClick={onSubmit} variant='contained'>
				Save
			</Button>
		</Box>
	);
};

export default WordAddForm;
