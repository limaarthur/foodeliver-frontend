import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import styles from './OrdersLocation.module.css'

const position = {
  lat: -7.2347669,
  lng: -35.8691761
}

export function OrdersLocation() {
  return (
    <div className={styles.orderLocationContainer}>
      <div className={styles.orderLocationContent}>
        <h3 className={styles.orderLocationTitle}>
          Selecione onde o pedido deve ser entregue:
        </h3>
        <div className={styles.filterContainer}>
        </div>

        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={true}
          className={styles.mapContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}