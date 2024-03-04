import { useState } from 'react';
import styles from './css-modules/app.module.css';

export const App = () => {
	let [value, setValue] = useState('');
	// const [list, setList] = useState([]);
	let [error, setError] = useState('');

	function onInputButtonClick() {
		const promptValue = prompt();
		if (promptValue.length < 3) {
			error = setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			value = setValue(promptValue);
			error = setError('');
		}
		// value = setValue(promptValue);
		console.log(promptValue);
	}

	const hasError = <div className={styles.error}>{error}</div>;

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error && hasError}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={styles.button} disabled>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				<ul className={styles.list}>
					<li className={styles['list-item']}>Первый элемент</li>
				</ul>
			</div>
		</div>
	);
};
