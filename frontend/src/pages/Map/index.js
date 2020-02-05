import React from 'react';
import CourseMap from '../../components/CourseMap';
import InputTag from '../../components/InputTag';
import './styles.css';

export default function Map() {
  return (
      <div className="map-container">
        <div id="map">
          <CourseMap />
        </div>
        <aside>
          <InputTag />
        </aside>
      </div>
  );
}
