import React from 'react';
import WordAddForm from './WordAddForm';
import WordItem from './WordItem';

const WordList = ({ words, onAdd, onDelete }) => {
	return (
		<>
			<WordAddForm onAdd={onAdd} />
			<div className='word__list'>
				{words.map((word) => (
					<WordItem key={word.id} word={word} onDelete={onDelete} />
				))}
			</div>
		</>
	);
};

export default WordList;
