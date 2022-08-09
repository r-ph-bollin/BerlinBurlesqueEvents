import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

// components

import Editor from "../components/Editor";

const Home = () => {
  return (
    <div className="home">
      we are here
      <Editor />
    </div>
  );
};

export default Home;
