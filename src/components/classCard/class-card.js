import React from 'react';
import {Link} from 'react-router-dom';

export default function ClassCard(props) {

  const {info} = props;

  return (
    <Link className="one-class" to={`/${info.title}`}>
      <h2 className="title">{info.name}</h2>
    </Link>
  )
}