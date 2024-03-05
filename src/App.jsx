import { useState } from 'react';
import styles from './css-modules/app.module.css';

export const App = () => {
	let [value, setValue] = useState('');
	let [list, setList] = useState([]);
	let [error, setError] = useState('');

	const hasError = <div className={styles.error}>{error}</div>;

	function onInputButtonClick() {
		const promptValue = prompt();
		if (promptValue.length < 3) {
			error = setError('Введенное значение должно содержать минимум 3 символа');
		} else {
			value = setValue(promptValue);
			error = setError('');
		}
	}

	function onAddButtonClick() {
		const updatedList = [...list, { id: `${Date.now()}`, value: value }];
		list = setList(updatedList);
	}

	let isValueValid = value.length >= 3;

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
				<button
					className={styles.button}
					disabled={!isValueValid}
					onClick={onAddButtonClick}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{!list.length ? (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map(item => {
							const date = Date(item.id);
							console.log(item.id);
							console.log(date);
							console.log(date.toLocaleString());
							return (
								<li key={item.id} className={styles['list-item']}>
									{item.value} - {date.toString()}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};
