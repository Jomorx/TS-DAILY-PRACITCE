function get(object:object, path:string, defaultValue:any = "undefined") {
  let newPath:string[] = [];
  newPath = path.replace(/\[/g, ".")
                .replace(/\]/g, "")
                .split(".");
  return (
    newPath.reduce((a, b) => {
      return (a || {})[b];
    }, object) || defaultValue
  );
}

const obj = {
    a: {
        b: [{
            c: 1
        }]
    }
}

console.log(get(obj, 'a.b[0].c[1].e[2][1].e', 0));
console.log(get(obj, 'a.b[0].c', 0));
console.log(get(obj, 'a.b.c', 0));
console.log(get(obj, 'a', 0));
export {}