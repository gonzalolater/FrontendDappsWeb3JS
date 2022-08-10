import { isWindows } from "nodemon/lib/utils";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./views/home";

function App() {
  useEffect(() => {
    if (isWindows.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts) => console.log(accounts));
    }
  }, []);

  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  );
}

export default App;
