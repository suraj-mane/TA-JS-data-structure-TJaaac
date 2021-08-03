```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- home.jpg -->

2. Answer the following with reason:

- `user == newUser;` // true // becase the user had assign newUser.
- `user === newUser;`// true // becase the data type is same that why true.
- `user.name === newUser.name;`// true // because user has assign the newUser.
- `user.name == newUser.name;`// true // 
- `user.sibling == newUser.sibling;`// true // because user has assign the newUser
- `user.sibling === newUser.sibling;`// true // they have same data type.
- `user.sibling == allBrothers;`// flase // they are not same.
- `user.sibling === allBrothers;`//flase // they are not same.
- `brothersCopy === allBrothers;`// flase // they are different assign.
- `brothersCopy == allBrothers;`// flase // they are different assign.
- `brothersCopy == user.sibling;`//true // they are same already assign.
- `brothersCopy === user.sibling;`// true // they have same data type.
- `brothersCopy[0] === user.sibling[0];`// true // beacuse the value and data type is same. 
- `brothersCopy[1] === user.sibling[1];`// true // beacuse the value and data type is same.
- `user.sibling[1] === newUser.sibling[1];`// true // beacuse the value and data type is same.
