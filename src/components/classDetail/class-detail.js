import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function ClassDetail(props) {

  const {name} = props.match.params;

  const [classInfo, setClassInfo] = useState(null);

  useEffect(() => {
    function getClass() {
      let response = axios.get(`https://www.dnd5eapi.co/api/classes/${name}`);

      setClassInfo(response.data);
    }

    getClass();
  }, [name]);

  return (
    <section id="class-detail">

      {classInfo.name ? 

        <h2 className='title'>{classInfo.name}</h2>
        <h3 className="hit-die">Hit die: {classInfo.hit_die}</h3>

        :

        <p className="loading"></p>
      }
    </section>
  )
}