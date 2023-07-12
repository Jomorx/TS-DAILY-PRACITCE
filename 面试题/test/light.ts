const generate =
  ({ color, delay }) =>
  () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(color);
      }, delay);
    });

const lightConf = [
  { color: "red", delay: 3000 },
  { color: "green", delay: 2000 },
  { color: "yellow", delay: 1000 },
];


const promises = lightConf.map(generate);

const light  = async () => {
    while(true){
        for(const promise of promises){
            const color = await promise()
            console.log(color);
        }
    }
}

light()