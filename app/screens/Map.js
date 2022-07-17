import React from 'react';
import MapView from 'react-native-maps';

function Map(props) {
    return (
        <MapView
        
        initialRegion={{
          latitude: 30.340000,
          longitude: 76.379997,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
}

export default Map;