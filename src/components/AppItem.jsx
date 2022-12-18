const AppItem = ({ app, onTagClick }) => {
  return (
    <div className="my-4 bg-white hover:shadow-[0_2px_10px_0_rgb(0,0,0,8%)] p-4">
      <a href={app.url} target="blank" className="font-bold">
        {app.title}
      </a>
      {app.description ? <p>{app.description}</p> : ""}
      <div>
        {app.tags.map((t) => {
          return (
            <span
              key={t}
              className="mr-4 text-sm text-gray-600 cursor-pointer"
              onClick={() => onTagClick(t)}
            >
              {t}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AppItem;
