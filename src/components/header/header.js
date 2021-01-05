import React from 'react';
import {Link} from 'react-router-dom';
import Clock from '../clock';

export default function Header() {
  return (
    <header>
      <h1><Link>React Test App</Link></h1>
      <Clock />
    </header>
  )
}