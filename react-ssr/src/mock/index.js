import Mock from "mockjs";

console.log(2222);
Mock.mock("/getNewsList", () => {
  return [1, 12, 3, 5, 4, 45, "nihao"];
});

export default Mock;
