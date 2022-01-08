import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import axios from 'axios';
import { Fragment, useState } from 'react';
import WordList from './components/words/WordList';
import Footer from './components/layout/Footer';

function App() {
	const [words, setWords] = useState([
		{
			id: 1,
			title: 'persistence',
			form: 'none',
			meaning:
				'firm or obstinate continuance in a course of action in spite of difficulty or opposition.',
		},
		{
			id: 2,
			title: 'achieve',
			form: 'verb',
			meaning:
				'successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage.',
		},
	]);

	const handleAdd = (title, form, meaning) => {
		const newWords = [...words, { id: Date.now(), title, form, meaning }];
		setWords(newWords);
	};

	const handleDelete = (word) => {
		const newWords = words.filter((item) => item.id !== word.id);
		setWords(newWords);
	};

	const searchWord = async (word) => {
		const res = await axios.get(
			`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
		);
		console.log(res);
	};

	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Footer />
				<div className='container'>
					<Switch>
						<Route exact path='/'>
							<WordList
								words={words}
								onAdd={handleAdd}
								onDelete={handleDelete}
							/>
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Redirect to='/' />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
