const isNumber = (val: any): val is number => {
  return typeof val === "number";
};
function test(str:number|string){
  if(isNumber(str)){
    str
  }else{
    
  }
}