const outerObj={
 name:"john",
 age:24,
 innerObj:{
  skills:"React.js"
 }
}

const newObj={...outerObj};
newObj.innerObj.skills="javascript";
console.log(outerObj.innerObj.skills);
console.log(newObj.innerObj.skills);


1. what is hoisting in javascript
2. how to pass data from child to parent
3. what is redux and can you explain me complete work flow
4. what is useState 
5. what is useEffect and can we perform lifcycle method using useEffect
6. if the task doesnt undertand to yyou what would you do 
7. what is event loop in avascript
8. do you know what is microfronted and how we integrated it in our react project
9.  let arr=[[8,5,3],9,0,6,[3,[4],6]]; // output : [8, 5, 3, 9, 0, 6, 3, 4, 6]
10. const arr=[
  {
    name:"john",
    age:21,
    totalAge:100,
  },
  {
    name:"James",
    age:14,    
    totalAge:100,
  },
  {
    name:"Kohn",
    age:32,    
    totalAge:100,
  },
  {
    name:"makes",
    age:10,    
    totalAge:100,
  },
  {
    name:"kaka",
    age:31,    
    totalAge:100,
  }
]

i want a new key called leftAge(totalAge-age) in  array of object whose age is geater than 18 
I want only thos record who as age greater than 18
