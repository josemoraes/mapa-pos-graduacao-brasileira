import React from 'react';
import {MdSchool} from 'react-icons/md';
import './styles.css';

export default function CourseMarker({text}) {
  return (
    <div className="marker" title={text}><MdSchool /></div>
  );
}
