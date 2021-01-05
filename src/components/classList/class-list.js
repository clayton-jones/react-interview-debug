import React from 'react';
import ClassCard from '../classCard';

export default function ClassList(props) {

  const {classList} = props;

  return (
    <section id="class-card-container">
      {classList.map((oneClass) => {
        <ClassCard info={oneClass} />
      })}
    </section>
  )
}