import { Header } from "./components/organisms/Header/Header";
import { Main } from "./components/organisms/Main/Main";
import styles from './App.module.scss'

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Main />
		</div>
	);
};
