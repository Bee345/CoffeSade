// 


import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

// Global fix for Leaflet markers (run once outside component)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const FirstALayer = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Run only once after mount (empty deps)
    let newMap = null;

    const initMap = () => {
      if (mapRef.current && !map) {
        try {
          // Ensure DOM is ready with a micro-task
          queueMicrotask(() => {
            if (mapRef.current) {
              newMap = L.map(mapRef.current).setView([47.6062, -122.3321], 15);

              L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19
              }).addTo(newMap);

              // Custom icon
              const customIcon = L.divIcon({
                className: 'custom-div-icon',
                html: '<div style="font-size: 32px; color: #D97706;">☕</div>',
                iconSize: [32, 32],
                iconAnchor: [16, 32]
              });

              L.marker([47.6062, -122.3321], { icon: customIcon })
                .addTo(newMap)
                .bindPopup('<b>CoffeeSade</b><br>123 Brew Street, Seattle, WA 98101')
                .openPopup();

              setMap(newMap);
            }
          });
        } catch (error) {
          console.error('Map init error:', error); // Graceful fail
        }
      }
    };

    initMap();

    // Cleanup
    return () => {
      if (newMap) {
        newMap.remove();
        setMap(null);
      }
    };
  }, []); // Empty deps: runs once

  const writeUp = `
    Nestled in the heart of Seattle's vibrant Coffee District, CoffeeSade invites you to discover our cozy haven at 123 Brew Street. 
    Surrounded by the city's buzzing energy and aromatic roasteries, our location is perfect for a quick espresso fix or a leisurely pour-over session. 
    Whether you're a local or just passing through, come brew with us and let the city's rhythm blend with the perfect cup.
  `;

  return (
    <main className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8" role="main" aria-labelledby="location-heading">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 id="location-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-playfair-display">
            Our Location
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </section>

        {/* Map Section - Added z-30 to keep under header (z-50) */}
        <section className="mb-12 rounded-xl shadow-lg overflow-hidden z-30">
          <div
            ref={mapRef}
            style={{ width: '100%', height: '400px' }}
            className="w-full h-[400px] sm:h-[500px] z-30"
          />
          {!map && <div className="absolute inset-0 flex items-center justify-center bg-gray-100">Loading map...</div>}
        </section>

        {/* Write-up Section */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-amber-100 text-center">
          <div 
            className="prose prose-lg max-w-3xl mx-auto text-gray-700 leading-relaxed font-playfair-display"
            dangerouslySetInnerHTML={{ __html: writeUp.replace(/\n/g, '<br />') }}
          />
        </section>
      </div>
    </main>
  );
};

export default FirstALayer;