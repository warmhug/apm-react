import React, { useState, useEffect } from "react";
import * as Sentry from "@sentry/react";
import { datadogLogs } from "@datadog/browser-logs";

const Home = props => {
  const [text, updateText] = useState("");

  const methodDoesNotExist = (e) => {
    // console.log('e', e);
    updateText(e.target.innerText);
    datadogLogs.logger.info("Button clicked", { name: "buttonName", id: 123 });
    throw new Error("自定义错误");
  };
  const methodDoesNotExist1 = (e) => {
    updateText(e.target.innerText);
    throw new Error("自定义错误 random " + Math.random());
  };
  const fetchError = async (e) => {
    updateText(e.target.innerText);
    // const reviews = await fetch('https://api.github.com/xx');
    try {
      const reviews = await fetch('https://api.github.com/xx');
    } catch (e) {
      const fetchError = new Error(`Failed to fetch reviews for`);
      fetchError.cause = e;
      console.log('ff', fetchError, e);
      Sentry.captureException(fetchError);
    }
  };

  return (
    <div>
      <h2>Home {console.log(props)}</h2>
      Initialized on 2022-05-27 <br />
      Use react@18.x and react-router@6.x
      <br /><br />
      {text}
      <br />
      <button onClick={methodDoesNotExist}>Break the world</button>
      <button onClick={methodDoesNotExist1}>Break the world1</button>
      <button onClick={fetchError}>fetchError</button>
    </div>
  );
};

export default Home;
