import React, { useState } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {

    const [ selectedLocation, setSelectedLocation ] = useState({});


    // Transform the search results object onto the 
    // { latitude: 52.516272, longitude : 13.3777722}
    const coordinates = searchResults.map((result) => ({
        longitude : result.long,
        latitude : result.lat
    }))

    const center = getCenter(coordinates);

    const [viewport, setViewport ] = useState({
        width : '100%',
        height : '100%',
        latitude : center.latitude,
        longitude : center.longitude,
        zoom : 11,
    })

    console.log(selectedLocation)

  return (
    <ReactMapGl 
        mapStyle='mapbox://styles/roykimm/ckyrczsee5uui15qo0qo0zxgn'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {searchResults.map((result, index) => {
            return (
                <div key={index}>
                    <Marker 
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                    <p
                        role="img"
                        onClick={() => setSelectedLocation(result)}
                        className="cursor-pointer text-2xl animate-bounce"
                        aria-label="push-pin"
                    >📍</p>
                    </Marker>

                    {
                        selectedLocation.long === result.long ? (
                            <Popup
                                closeOnClick={true}
                                onClose={() => setSelectedLocation({})}
                                latitude={result.lat}
                                longitude={result.long}
                                className="z-50"
                            >
                                {result.title}
                            </Popup>
                        ) : (false)
                    }
                </div>
            )
        })}
    </ReactMapGl>
  );
}

export default Map;
