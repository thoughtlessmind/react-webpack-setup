import "./styles/index.scss";

const testObj = {
  obj1: "HI",
  days: 3,
};

console.log({ ...testObj, newObj: "new item" });
