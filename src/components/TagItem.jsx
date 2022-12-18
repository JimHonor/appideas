const TagItem = ({ tag, onTagClick, isActive }) => {
  return (
    <div
      className={`cursor-pointer p-2 hover:bg-[#efefef] rounded-md text-sm text-[#9d9d9d] ${
        isActive ? "bg-[#55bb8e] text-white" : ""
      }`}
      onClick={() => onTagClick(tag)}
    >
      {tag}
    </div>
  );
};

export default TagItem;
