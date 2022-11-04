import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from "@datadog/browser-logs";


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Sentry.init({
  dsn: "https://6822a573f7114d8090cb8eebe2d8c9bb@o1306599.ingest.sentry.io/6549365",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

datadogLogs.init({
  clientToken: "pub80eca143cf546b8d64b9b5c240174abe",
  site: "datadoghq.com",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});
datadogRum.init({
    applicationId: '21b97a29-ab63-4515-9afa-87cda2db56c8',
    clientToken: 'pub80eca143cf546b8d64b9b5c240174abe',
    site: 'datadoghq.com',
    service:'test',
    env:'prod',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
});
datadogRum.startSessionReplayRecording();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
