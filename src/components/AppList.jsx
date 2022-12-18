import { useEffect, useState } from "react";
import AppItem from "./AppItem";

function AppList({ apps, activeTag, onTagClick, resetActiveTag }) {
  const [visibleApps, setVisibleApps] = useState([]);
  useEffect(() => {
    if (activeTag) {
      setVisibleApps(apps.filter((app) => app.tags.includes(activeTag)));
    } else {
      setVisibleApps(apps);
    }
  }, [activeTag]);

  return (
    <div className="my-4 flex-1 overflow-auto px-8">
      <h2 onClick={resetActiveTag}>Amazing APPs</h2>
      {visibleApps.map((app) => {
        return <AppItem key={app.url} app={app} onTagClick={onTagClick} />;
      })}
    </div>
  );
}

export default AppList;
