import React, { useEffect, useRef, useState } from 'react';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import '../styles/tailwind.css';

function PulseMarker() {
  const pulseIcon = L.divIcon({
    className: 'pulse-marker-icon',
    html: '<div class="pulse-marker"><div></div></div>',
  });

  return (
    <Marker position={[-0.8917, 119.8707]} icon={pulseIcon}>
      <Popup>Palu</Popup>
    </Marker>
  );
}

function ResizeMapListener() {
  const map = useMap();

  useEffect(() => {
    function handleResize() {
      map.flyTo([-0.8917, 119.8707]); //coordinate Palu
    }

    map.on('resize', handleResize);
    return () => {
      map.off('resize', handleResize);
    };
  }, [map]);

  return null;
}

function MapInit() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.leafletElement.scrollWheelZoom.disable(); // menonaktifkan zoom-in/out saat scroll
    }
  }, []);
  return (
    <MapContainer center={[-2.989167, 120.164167]} zoom={6} minZoom={4} id="mapid" style={{ height: '700px' }} dragging={false}>
      <ResizeMapListener />
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
      <PulseMarker />
    </MapContainer>
  );
}

export default MapInit;
