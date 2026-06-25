import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const businessLocation = {
    name: 'Luna Graphics Print Shop',
    address: 'Kweria Road, Nairobi CBD',
    coordinates: { lat: -1.2803021317953365, lng: 36.822639212706925 },
    landmarks: [
      'Near Khoja Stage',
      'Near Globe roundabout',
      'Walking distance from Kirinyaga road',
      '5 minutes from Fire Station'
    ],
    parking: 'Street parking available on Kweria Road ',
    publicTransport: 'Accessible by matatu routes 46, 100, 111, and 126'
  };

  const nearbyServices = [
    {
      name: 'Khoja Stage',
      type: 'Landmark',
      distance: '50m',
      icon: 'Building'
    },
    {
      name: 'Globe Roundabout',
      type: 'Transport',
      distance: '100m',
      icon: 'Building2'
    },
    {
      name: 'Fig Tree',
      type: 'Landmark',
      distance: '200m',
      icon: 'Trees'
    },
    {
      name: 'Fire Station',
      type: 'govt amenity',
      distance: '300m',
      icon: 'Train'
    }
  ];

  const handleGetDirections = () => {
    const { lat, lng } = businessLocation.coordinates;
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=ChIJOwg_06VLWgARSTfObYhXYAU`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <div className="bg-background rounded-lg shadow-lg overflow-hidden">
      {/* Map Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-heading font-semibold text-text-primary mb-1">
              Find Us
            </h2>
            <p className="text-text-secondary">
              Located in the heart of Nairobi CBD
            </p>
          </div>
          <Button
            variant="primary"
            size="sm"
            iconName="Navigation"
            iconPosition="left"
            onClick={handleGetDirections}
          >
            Directions
          </Button>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="relative">
        <div className="w-full h-80 bg-surface-100 relative overflow-hidden">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-100">
              <div className="text-center">
                <Icon name="MapPin" size={48} color="var(--color-text-muted)" className="mx-auto mb-2" />
                <p className="text-text-muted">Loading map...</p>
              </div>
            </div>
          )}
          
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Halo Creatives Location"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${businessLocation.coordinates.lat},${businessLocation.coordinates.lng}&z=16&output=embed`}
            onLoad={handleMapLoad}
            className="border-0"
          />
        </div>

        {/* Map Overlay Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button
            onClick={handleGetDirections}
            className="w-10 h-10 bg-background shadow-lg rounded-lg flex items-center justify-center hover:bg-surface-50 transition-colors duration-200"
            title="Get Directions"
          >
            <Icon name="Navigation" size={20} color="var(--color-primary)" />
          </button>
          
          <button
            onClick={() => window.open(`https://maps.google.com/?q=${businessLocation.coordinates.lat},${businessLocation.coordinates.lng}`, '_blank')}
            className="w-10 h-10 bg-background shadow-lg rounded-lg flex items-center justify-center hover:bg-surface-50 transition-colors duration-200"
            title="Open in Google Maps"
          >
            <Icon name="ExternalLink" size={20} color="var(--color-primary)" />
          </button>
        </div>
      </div>

      {/* Location Details */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Address Information */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="MapPin" size={20} className="mr-2" color="var(--color-primary)" />
              Address & Landmarks
            </h3>
            
            <div className="space-y-2 mb-4">
              <p className="text-text-primary font-medium">
                {businessLocation.name}
              </p>
              <p className="text-text-secondary">
                {businessLocation.address}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-text-primary mb-2">Nearby Landmarks:</p>
              {businessLocation.landmarks.map((landmark, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-sm text-text-secondary">{landmark}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text-primary mb-3 flex items-center">
              <Icon name="Car" size={20} className="mr-2" color="var(--color-primary)" />
              Getting Here
            </h3>
            
            <div className="space-y-4">
              <div className="p-3 bg-surface-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Icon name="Car" size={16} color="var(--color-accent)" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">By Car</p>
                    <p className="text-xs text-text-secondary">
                      {businessLocation.parking}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-surface-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Icon name="Bus" size={16} color="var(--color-accent)" className="mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Public Transport</p>
                    <p className="text-xs text-text-secondary">
                      {businessLocation.publicTransport}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Places */}
        <div className="mt-6 pt-6 border-t border-border">
          <h3 className="text-lg font-heading font-semibold text-text-primary mb-4">
            Nearby Places
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {nearbyServices.map((place, index) => (
              <div key={index} className="p-3 bg-surface-50 rounded-lg text-center">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Icon name={place.icon} size={16} color="var(--color-primary)" />
                </div>
                <p className="text-sm font-medium text-text-primary">
                  {place.name}
                </p>
                <p className="text-xs text-text-muted">
                  {place.distance}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              iconName="Navigation"
              iconPosition="left"
              onClick={handleGetDirections}
              className="flex-1"
            >
              Get Directions
            </Button>
            
            <Button
              variant="outline"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+254791159618', '_self')}
              className="flex-1"
            >
              Call Before Visit
            </Button>
            
            <Button
              variant="outline"
              iconName="Share"
              iconPosition="left"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Luna Graphics Location',
                    text: 'Visit Luna Graphics Print Shop in Nairobi CBD',
                    url: `https://maps.google.com/?q=${businessLocation.coordinates.lat},${businessLocation.coordinates.lng}`
                  });
                } else {
                  navigator.clipboard.writeText(`https://maps.google.com/?q=${businessLocation.coordinates.lat},${businessLocation.coordinates.lng}`);
                }
              }}
              className="flex-1"
            >
              Share Location
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;