import './App.css';
import React from "react"
import Button from "react-bootstrap/Button";
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import PageBanner from "./components/PageBanner/PageBanner";

function App() {
  const [data, setData] = React.useState();
  const [cycleCount, setCycleCount] = React.useState(0);
  const handle = useFullScreenHandle();
  const path = window.location.pathname;
  const [err, setErr] = React.useState(false);

  // initial api call
  React.useEffect(() => {
    fetch("/api" + path)
        .then((res) => {
            if(res.ok){
                return res.json();
            }
            else {
                throw new Error('cannot fetch resource, check url')
            }
        })
        .then((data) => {
            console.log(data.urls);
            setData(data.urls);
        }).catch((err) => {
            console.log(err.message)
            setErr(true)
        });
  }, []);

  React.useEffect(() => {
      const interval =  setInterval(() => {
          setCycleCount(cycleCount => cycleCount + 1)
      }, 20000);
      return () => clearInterval(interval);
  }, []);

  let banner;
   if(data){
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
          { err &&
              <h1>
                  Page cannot be reached
              </h1>
          }
      </div>
  );

}

export default App;
