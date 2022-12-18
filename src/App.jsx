import { useState } from "react";
import getApps from "./api/getApps";
import getTags from "./api/getTags";

import AppList from "./components/AppList";
import TagList from "./components/TagList";

import "./App.css";

const App = () => {
  const [activeTag, setActiveTag] = useState("");

  const apps = getApps();
  const tags = getTags(apps);

  const onTagClick = (tag) => {
    setActiveTag(tag);
  };

  return (
    <div className="App mx-auto flex w-[960px] h-screen">
      <TagList tags={tags} activeTag={activeTag} onTagClick={onTagClick} />
      <AppList
        apps={apps}
        activeTag={activeTag}
        onTagClick={onTagClick}
        resetActiveTag={() => setActiveTag("")}
      />
    </div>
  );
};

export default App;
