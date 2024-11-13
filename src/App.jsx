import Header from "./pages/layout/header";
import Home from "./pages/home";
import "./pages/style/app.css";
import Profile from "./pages/profile";
import { createContext } from "react";
import Publicjournal from "./pages/publicjournal";
import Stat from "./pages/stats";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const appInformation = createContext();

const appInfo = {
  appName: 'tradNal',
  homepage: [{ screen: "select a jounal to preview" }],
  publicJournal: [{ welcome: "connect with other financial market trader" }],
  stat: [{ statistic: "Your journal statistic so far" }],
};

const App = () => {
  return (
    <appInformation.Provider value={appInfo}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/publicjournal" element={<Publicjournal />} />
            <Route path="/stat" element={<Stat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </appInformation.Provider>
  );
};

export default App;
