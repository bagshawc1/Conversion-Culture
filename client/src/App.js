import './App.css';
import React from "react"
import Button from "react-bootstrap/Button";
import { FullScreen, useFullScreenHandle } from "react-full-screen"

function App() {
  const [data, setData] = React.useState(null);
  const [cycleCount, setCycleCount] = React.useState(0)
  const handle = useFullScreenHandle();

  React.useEffect(() => {
    fetch("/api/ctc159")
        .then((res) => res.json())
        .then((data) => {
            setData(data.urls)
        })
  }, []);

  React.useEffect(() => {
      const interval =  setInterval(() => {
          setCycleCount(cycleCount => cycleCount + 1)
      }, 20000);
      return () => clearInterval(interval);
  }, [])
  let frame;
   if(data){
     frame = <iframe allowFullScreen={true} frameBorder={0} height={1080} title={'frame'} src={data[cycleCount % 3]} />;
   } else {
     frame = <p>Loading page...</p>
   }
  return (
      <div className="App">
          <Button variant="secondary" onClick={handle.enter} size="lg">
              Fullscreen
          </Button>
          <FullScreen handle={handle}>
              {frame}
          </FullScreen>
      </div>
  );

}

export default App;
