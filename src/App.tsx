import { Header } from "./components/organisms/Header/Header";
import styles from './App.module.scss'
import { Route, Routes } from "react-router-dom";
import { AddFormView } from "./views/AddFormView/AddFormView";
import { MainView } from "./views/MainView/MainView";

export const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Routes>
				<Route path="/" element={<MainView />}/>
				<Route path="/add-form" element={<AddFormView />}/>
			</Routes>
		</div>
	);
};
