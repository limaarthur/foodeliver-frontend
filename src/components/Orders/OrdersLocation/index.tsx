import { useState } from 'react';
import type { OrderLocationdata } from '../@types/types';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import AsyncSelect from 'react-select/async';
import type { GroupBase, OptionsOrGroups } from 'react-select';

import { fetchLocalMapTiler } from '../../../api';

import styles from './OrdersLocation.module.css'

const initialPosition = {
  lat: -7.2347669,
  lng: -35.8691761
}

type Place = {
  label?: string
  value?: string
  position: {
    lat: number
    lng: number
  }
}

type Props = {
  onChangeLocation: (location: OrderLocationdata) => void;
}

export function OrdersLocation({ onChangeLocation }: Props ) {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  })

  const loadOptions = async (inputValue: string, callback: (places: OptionsOrGroups<Place, GroupBase<Place>>) => void
  ): Promise<OptionsOrGroups<Place, GroupBase<Place>>> => {
    
    const response = await fetchLocalMapTiler(inputValue);
  
    const places = response.data.features.map((item: any) => {
      return ({
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      });
    });
  
    callback(places);

    return places as OptionsOrGroups<Place, GroupBase<Place>>;
  };
  
  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!
    });
  };

  return (
    <div className={styles.orderLocationContainer}>
      <div className={styles.orderLocationContent}>
        <h3 className={styles.orderLocationTitle}>
          Selecione onde o pedido deve ser entregue:
        </h3>
        <div className={styles.filterContainer}>
          <AsyncSelect
            placeholder="Digite um endereço para entrega do pedido"
            className={styles.filter}
            loadOptions={loadOptions}
            onChange={value => handleChangeSelect(value as Place)}
          />
        </div>

        <MapContainer 
          center={address.position} 
          zoom={15} 
          key={address.position.lat}
          scrollWheelZoom={true}
          className={styles.mapContainer}
        >

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>
              {address.label}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}