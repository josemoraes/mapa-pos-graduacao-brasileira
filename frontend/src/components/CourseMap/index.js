import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import CourseMarker from '../CourseMarker';

export default function CourseMap() {
  const [centerMap, setCenterMap] = useState({
    lat: -10.730377, 
    lng: -52.966512
  });
  const [zoom, setZoom] = useState(4);
  const [markers, setMarkers] = useState([
    {
      id:1,
      location:{
        lat: -23.185998,
        lng: -50.657351
      },
      place: "UTFPR - Cornélio Procópio",
      tags: ["computação","engenharia"]
    },
    {
      id:2,
      location:{
        lat: -23.307232,
        lng: -51.114128
      },
      place: "UTFPR - Londrina",
      tags: ["ambiental"]
    },
    {
      id:3,
      location:{
        lat: -23.324152,
        lng: -51.200494
      },
      place: "UEL",
      tags: ["computação", "física"]
    }
  ]);
  const [selectedMarkers, setSelectedMarkers] = useState([]); 
  const tags = useSelector(state=> state.data);
  
  useEffect(()=>{
    const markersFiltered = markers.filter((marker)=>{
      const tagsFiltered = marker.tags.filter((tagFromMarker)=>{
        return tags.includes(tagFromMarker);
      });
      return tagsFiltered.length > 0;
    });
    setSelectedMarkers(markersFiltered);
    setZoom(4);
  }, [tags]);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={centerMap}
          defaultZoom={zoom}
        >
          {
            selectedMarkers.map(marker =>(
              <CourseMarker 
                key={marker.id}
                lat={marker.location.lat}
                lng={marker.location.lng}
                text={marker.place}
              />
            ))
          }
        </GoogleMapReact>
      </div>
  );
}
