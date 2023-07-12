// rgb(255,0,0)
const getRgbColorArr = (color: string) => {
  return color.slice(4, color.length - 1).split(",");
};

const transformRgbColorArrToHex = (colorArr: string[]) => {
  return `#${colorArr
    .map((item) => `${(+item).toString(16)}`.padStart(2, "0"))
    .join("")}`;
};

const transformHexToRgb = (color: string) => {
  return `rgb(${parseInt("0x" + color.slice(1, 3))},${parseInt(
    "0x" + color.slice(3, 5)
  )},${parseInt("0x" + color.slice(5, 7))})`;
};

const transformColor = (color: string) => {
  if (color[0] === "#") {
    return transformHexToRgb(color);
  } else if (color.startsWith("rgb")) {
    const colorArr = getRgbColorArr(color);
    return transformRgbColorArrToHex(colorArr);
  }
  throw new Error("color is not allow");
};

console.log(transformColor("#ff0000"));
console.log(transformColor("#00ff00"));
console.log(transformColor("#gggggggggg"));
console.log(transformColor("rgb(255,0,0)"));
console.log(transformColor("rgb(11,)"));
console.log(transformColor("rgba("));
console.log(transformColor("#ffffff"));
console.log(transformColor("#fff"));
