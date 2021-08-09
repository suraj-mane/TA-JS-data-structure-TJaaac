1. What will be the output and explain the reason.

```js
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
let user = obj;
let arr = ['Hi'];
let arr2 = arr;
```

Answer the following with reason after going through the above code:

- `[10] === [10]`// flase // becuse they are differnt location.
- What is the value of obj? // { surname: 'Stark'};
- `obj == newObj`// flase //becuse obj has reassign the value;
- `obj === newObj`// flase // they had differnt location.
- `user === newObj`// flase // becuse first reassign that why they had differnt loction.
- `user == newObj`// flase // reassign value. 
- `user == obj`// true // same value.
- `arr == arr2`// true // same value.
- `arr === arr2`// true // same location.

2. What's will be the value of `person1` and `person2` ? Explain with reason. Draw the memory representation diagram.

<!-- hello.jpg -->

```js
function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);// {name : 'Alex', age:30}
console.log(person2);// {name : 'Jhon', age:50}
```

3. What will be the output of the below code:

```js
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
user.brothers = brothers;
brothers.push('Robb');
console.log(user.brothers === brothers); //true
console.log(user.brothers.length === brothers.length); //true
```
