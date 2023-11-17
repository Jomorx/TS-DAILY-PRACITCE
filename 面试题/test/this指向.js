var name = "222"
var a = {
    name: "111",
    say: function() {
        console.info(this.name);
    }
}
var fun = a.say;
fun();//说结果 222
a.say();//说结果 111


var b = {
    name: "333",
    say: function(fun) {
        fun();
    }
}
b.say(a.say);//说结果 222
b.say = a.say;
b.say();//说结果 333
var fun1 = a.say.bind(b);
fun1.call(a); //333
console.log('--------')


var name = '123';

var obj = {

   name: '456',

   getName: function () {

       function printName () {

           console.log(this.name);

       }

       printName();

   }

}

obj.getName();
