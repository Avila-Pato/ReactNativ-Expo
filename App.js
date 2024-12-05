import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_MAPS_KEY } from '@env';

export default function App() {
  const [origin, setOrigin] = React.useState({
    latitude: -33.4489, // Santiago de Chile
    longitude: -70.6693,
  });

  const [destination, setDestination] = React.useState({
    latitude: -33.6111, // Puente Alto
    longitude: -70.5750,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Marcadores */}
        <Marker
          draggable={true}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          coordinate={destination}
        />
        <Marker
          draggable={true}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
          coordinate={origin}
        />

        {/* Línea entre dos puntos */}
        <Polyline coordinates={[origin, destination]} strokeColor="#2fef" strokeWidth={3} />

        {/* Mapa con la dirección */}
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
