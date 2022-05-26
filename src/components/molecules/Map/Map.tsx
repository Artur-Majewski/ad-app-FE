import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../../utils/fix-map-icon';
import styles from './Map.module.scss';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { SimpleAdEntity } from 'types';

export const Map = () => {
	const [ads, setAds] = useState<SimpleAdEntity[]>([]);

	useEffect(() => {
		(async () => {
			const res = await fetch('http://localhost:3001/ad/search');
			// const res = await fetch(`http://localhost:3001/ad/search/${}`);
			const adsData = await res.json();
			setAds(adsData);
		})();
	}, []);

	return (
		<section className={styles.map}>
			<MapContainer center={[51.7526621, 19.4510132]} zoom={15}>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/>
				{ads.map((ad) => (
					<Marker key={ad.id} position={[ad.latitude, ad.longitude]}>
						<Popup>{ad.id}</Popup>
					</Marker>
				))}
			</MapContainer>
		</section>
	);
};
