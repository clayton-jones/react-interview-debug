import React, {useState} from 'react';

export default function Clock() {
  const [time] = useState(+new Date(Date.now()));

  return (
    <section id='clock'>
      {/* should display time in format HH:mm:ss am/pm updated every second*/}
      Time: {time}
    </section>
  )
}