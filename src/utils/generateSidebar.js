function generateSidebar(json, parentId, childId, child, resultArr) {
  if (!child) {
    resultArr.push(json);
    return;
  }
  const index = resultArr.findIndex((item) => item.name === json.name);
  if (index === -1) {
    json["child"] = [];
    json["child"].push({ name: child, link: `/page/${parentId}_${childId}` });
    resultArr.push(json);
    return;
  }
  resultArr[index]["child"].push({
    name: child,
    link: `/page/${parentId}_${childId}`,
  });
}
export default generateSidebar;
