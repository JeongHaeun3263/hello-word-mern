import React from 'react';

import {
	Button,
	Card,
	CardActions,
	CardContent,
	Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WordItem = ({ word, onDelete }) => {
	const handleDelete = () => {
		onDelete(word);
	};
	return (
		<Card variant='outlined' sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography variant='h5' component='div'>
					{word.title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					{word.form}
				</Typography>
				<Typography variant='body2'>{word.meaning}</Typography>
			</CardContent>
			<CardActions>
				<Button>
					<DeleteIcon size='small' onClick={handleDelete} />
				</Button>
			</CardActions>
		</Card>
	);
};

export default WordItem;
