import TagItem from "./TagItem";

const TagList = ({ tags, onTagClick, activeTag }) => {
  return (
    <div className="w-[280px] overflow-auto my-4 tag-list">
      <h2 className="font-bold text-xs tracking-wider">TAGS</h2>
      <div>
        {tags.map((tag) => {
          return (
            <TagItem
              key={tag}
              tag={tag}
              onTagClick={onTagClick}
              isActive={tag === activeTag}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TagList;
