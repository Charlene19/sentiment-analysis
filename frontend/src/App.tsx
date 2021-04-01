import React from "react";
import "./App.css";
import TweetList from "./components/TweetList";
import Navigation from "./components/Navigation";
const App: React.FC = () => {
  return (
    <div >
      <Navigation />
      <TweetList />
    </div>
  );
};
export default App;
