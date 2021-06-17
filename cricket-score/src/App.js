import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./api/api";
import { Container, Grid} from "@material-ui/core";
function App() {
const [matches, setMatches] = useState([]);
  
  console.log(matches.data);
  useEffect(() => {
    getMatches()
      .then((data) => {
       console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
        <Grid container>
          <Grid item xs={12 }>
            {matches.map((match) => (
              <React.Fragment>
                {match.type=="Twenty20"?
              (<MyCard match={match}></MyCard>):("")
            }
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;