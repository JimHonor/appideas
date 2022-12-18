// 从 apps 数组中提取出 tags
// 1）先提取出每个 app 对象的 tags 属性，保存到新数组里
// 2）对新数组做去重处理
const getTags = (apps) => {
  if (apps.length) {
    const tags = apps
      .map((app) => app.tags)
      .flat()
      .reduce((result, item) => {
        if (result.indexOf(item) < 0) {
          result.push(item);
        }
        return result;
      }, []);
    return tags;
  } else {
    return [];
  }
};

export default getTags;
