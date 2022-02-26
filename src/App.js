import "./App.css";
import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
function App() {
  const [list, setList] = useState([]);

  const fetchQuote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setList(data);
    } catch (e) {
      throw new Error();
    }
  };
  return (
    <div className="App">
      <Card style={{ backgroundColor: "#1E1E1E" }}>
        <CardContent>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            style={{ color: "white", fontFamily: "cursive" }}
            variant="body2"
          >
            {list.length !== 0 ? (
              list.content
            ) : (
              <p style={{ align: "center" }}>Click to generate a quote</p>
            )}
          </Typography>
          <Typography
            sx={{ fontSize: 14, fontWeight: "bold" }}
            style={{
              color: "white",
              alignItems: "right",
              fontFamily: "cursive",
            }}
            variant="body1"
            align="right"
          >
            <br />
            {list.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="text"
            size="small"
            onClick={fetchQuote}
            align="center"
            style={{ color: "#89C1EF", backgroundColor: "#14273A" }}
          >
            Generate Quote
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default App;
