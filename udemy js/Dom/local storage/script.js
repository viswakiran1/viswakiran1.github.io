localStorage.setItem("key","value");
console.log(localStorage.getItem("key"));
localStorage.setItem("number","1","2","3");
console.log(localStorage.getItem("number"))
// console.log(localStorage.getItem("2"))
///consider omly one key value
console.log(localStorage.key("index"));
localStorage.text=5;
console.log(localStorage.text)
delete localStorage.text;
console.log(localStorage.text)
