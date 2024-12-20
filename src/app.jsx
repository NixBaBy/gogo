import React from "react";
import "./app.css";
import Header from "./compononts/Header";
import { HeroNews } from "./compononts/HeroNews";
import { SmallNews } from "./compononts/SmallNews";
import { Gogostory } from "./compononts/GogoStory";
const App = () => {
  return (
    <div className="body">
      <Header />
      <HeroNews />
      <SmallNews />
      <Gogostory />
    </div>
  );
};
export default App;
