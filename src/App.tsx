import { Header } from "./components/organisms/Header/Header";
import { Main } from "./components/organisms/Main/Main";
import styles from './App.module.scss'
import { Route, Routes } from "react-router-dom";
import { AddFormView } from "./views/AddFormView/AddFormView";

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />}/>
				<Route path="/add-form" element={<AddFormView />}/>
			</Routes>
		</div>
	);
};
