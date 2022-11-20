import {
    GoogleMap,
    Marker,
    LoadScript
} from '@react-google-maps/api';

import shape from '../assets/shape.svg';

type MapProps = {
    position: { lat: number, lng: number }
}

const Map = ({ position }: MapProps) => {
    
    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY} language='en'>
            <GoogleMap
                center={position}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    styles: [
                        { elementType: 'geometry', stylers: [{ color: '#333A52' }] },
                        { elementType: 'labels.text.stroke', stylers: [{ color: '#333A52' }] },
                        { elementType: 'labels.text.fill', stylers: [{ color: '#C3C3C3' }] },
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{ color: '#234E90' }]
                        }
                    ]
                }}>
                <Marker position={position} icon={shape} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;

