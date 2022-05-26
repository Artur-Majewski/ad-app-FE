import { MapContainer, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';
import 'leaflet/dist/leaflet.css'

export const Map = () => {
	return (
		<section className={styles.map}>
			<MapContainer center={[51.7526621,19.4510132]} zoom={15}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
			</MapContainer>
		</section>
	);
};
