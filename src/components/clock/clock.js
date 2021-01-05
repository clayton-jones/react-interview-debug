import React, {useEffect, useState} from 'react';

export default function Clock() {
  const [time, setTime] = useState(+new Date(Date.now()));

  useEffect(() => {

    const timer = setInterval(() => {
      let timeNow = new Date(Date.now());

      setTime(timeNow.getTime());
    }, 3000);
    

  }, []);

  return (
    <section id='clock'>
      {/* should display time in format HH:mm:ss am/pm updated every second*/}
      Time: {time}
    </section>
  )
}