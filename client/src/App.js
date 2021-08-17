import './App.css';
import React from "react"
import Button from "react-bootstrap/Button";
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import PageBanner from "./components/PageBanner/PageBanner";

function App() {
  const [data, setData] = React.useState([]);
  const [cycleCount, setCycleCount] = React.useState(0);
  const handle = useFullScreenHandle();

  // initial api call
  React.useEffect(() => {
    fetch("/api/ctc159")
        .then((res) => res.json())
        .then((data) => {
            setData(data.urls);
        })
  }, []);

  React.useEffect(() => {
      const interval =  setInterval(() => {
          setCycleCount(cycleCount => cycleCount + 1)
      }, 20000);
      return () => clearInterval(interval);
  }, []);

  let banner;
   if(data.length > 0){
       banner = <PageBanner activeFrame={data[cycleCount % 3]}/>
   } else {
       banner = <p>Loading Page...</p>
   }
  return (
      <div className="App">
          <Button variant="secondary" onClick={handle.enter} size="lg">
              Fullscreen
          </Button>
          <FullScreen handle={handle}>
              {banner}
          </FullScreen>
      </div>
  );

}

export default App;
