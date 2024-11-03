import ViewWork from "./ViewWork"
import {useState, useEffect} from 'react'


function Typewriter() {

    const [showComponent, setShowComponent] = useState(false)

    useEffect(() => {
        setInterval(() => {
          setShowComponent(true)
    
        }, 3000);
      }, []);

  return (
    <div>
        <h2 className="type-writer">I am a frontend developer.</h2>
        {showComponent && <ViewWork />}
    </div>
  )
}

export default Typewriter
