/*
Game of Thrones : Houses And People's Name
Try to first understand how Array in Objects & Objects in Array are arranged in this example.
Only when you don't get it by yourself, comeback again and read the hint
*/

// Write code for the following problems:
//console.log(got);

// You have access to a variable named `got`. Which comes from `data.js` file

/*
Hint: (Structure of got variable)
  - got variable is an Object which has one key: `houses`
  - `houses` is an array of multiple house
  - Each house is an Object which has two keys: "name" and "people"
  - people is an array of all persons living in that particular house
  - And, each person is an object with "name" and "description" properties
*/

// 1. Log the value of key "houses"
//console.log(got.houses);
// 2. Log the length of the "houses" key
//console.log(got.houses.length);    
// 3. Log the name of all houses in got one by one
// for(let names of got.houses){
//  console.log(names.name);
// }
// 4. Log the name of all the people in house Starks (index 0) one by one
//  for(let i=0; i < got.houses.length; i++){
//    const Sname = got.houses[i];

//    if(Sname.name === "Starks"){
//      for(let j=0; j < Sname.people.length; j++){
//        console.log(Sname.people[j].name);
//      }
//    }
//  }
// 5. Log the name of all the people in house Lannisters (index 1) one by one
// for(let i=0; i < got.houses.length; i++){
//   const house = got.houses[i];
  
//   if (house.name === "Lannisters") {
//     for(let j=0; j < house.people.length; j++){
//       console.log(house.people[j].name);
//     }
//   }
// }
// 6. Log the description of all the people in house Lannisters (index 1) one by one
// for(let i=0; i < got.houses.length; i++){
//   const house = got.houses[i];
  
//   if(house.name === "Lannisters"){
//     for(let j=0; j < house.people.length; j++){
//       console.log(house.people[j].description);
//     }
//   }
// }
// 7. Log the name and description of all the people in house Lannisters (index 1) one by one like `I am [name] and my bio is [description]`
// for(let i= 0; i < got.houses.length; i++){
//   const all = got.houses[i];

//   if(all.name === "Lannisters"){
//     for(let j= 0; j < all.people.length; j++){
//       let names = all.people[j].name;
//       let descriptions = all.people[j].description;
//       console.log(`I am ${names} and my bio is ${descriptions}`);
//     }
//   }
// }
// 8. Log the name and description of all the people in house Starks (index 0) one by one like `I am [name] and my bio is [description]`
// for(let i= 0; i < got.houses.length; i++){
//    const all = got.houses[i];
  
//   if(all.name === "Starks"){
//     for(let j= 0; j < all.people.length; j++){
//       let names = all.people[j].name;
//       let descriptions = all.people[j].description;
//       console.log(`I am ${names} and my bio is ${descriptions}`);
//     }
//   }
// }
// 9. Log the name and description of the people in house Starks whose name is `Robb Stark`
// for (i=0; i < got.houses.length; i++){
//   const all = got.houses[i];

//   if(all.name === "Starks"){
//     for(j=0; j< all.people.length; j++){
//       const names = all.people[j].name;
//       const descriptions = all.people[j].description;
      
//       if(names === "Robb Stark"){
//         console.log(`${names} ${descriptions}`);
//       }
//     }
//   }
// }
// 10. Log the name and description of the people in house Lannisters whose name is `Tywin Lannister`
// for (i=0; i < got.houses.length; i++){
//   const all = got.houses[i];

//   if(all.name === "Lannisters"){
//     for(j=0; j< all.people.length; j++){
//       const names = all.people[j].name;
//       const descriptions = all.people[j].description;
      
//       if(names === "Tywin Lannister"){
//         console.log(`${names} ${descriptions}`);
//       }
//     }
//   }
// }
// 11. Push the name of the houses in an array named `houseNames` and Log the array
// for (let i=0; i < got.houses.length; i++){
//   let house =(got.houses[i].name);
//   let houseNames = push(house);
// }
// 12. Log the size of people in Starks house
// for(let i=0; i<got.houses.length; i++){
//   const house = got.houses[i];

//   if(house.name === "Starks"){
//     for (let j=0; j<house.people.length; j++){
//       console.log(house.people[j].length);
//     }
//   }
// }
// 13. Log the size of people in Lannisters house
// for(let i=0; i<got.houses.length; i++){
//   const house = got.houses[i];

//   if(house.name === "Lannisters"){
//     for (let j=0; j<house.people.length; j++){
//       console.log(house.people[j].length);
//     }
//   }
// }
// 14. Add the name and size of people in an object like {Starks: 4, Lannisters: 6} and log the object
// for(let i=0; i<got.houses.length; i++){
//   const house = got.houses[i];
//   let nameOb = {};

//   if(house.name === "Starks"){
//     for(let j=0; j < house.people.length; j++){
//       nameob = house.people[j].length;
//     }
//   } else {
//     for(let k=0; k < house.people.length; k++){
//       nameOb = house.people[k].length;
//     }
//   }
//   console.log(nameOb);
// }
// 15. Log the name of all the people of all the houses in got one by one
// for(let i=0; i< got.houses.length; i++){
//   const names = got.houses[i];

//   for(let j=0; j<names.people.length; j++){
//     console.log(names.people[j].name);
//   }
// }
// 16. Push all names into a new array named `allPeople` and log the value array.
// for(let i=0; i< got.houses.length; i++){
//     const names = got.houses[i];
//     let allPeople;

//     for(let j=0; j<names.people.length; j++){
//       allPeople.push(names.people[j].name);
//       console.log(allPeople);
//     }
// }
// 17. Log the value and length of `allPeople` array created above
// console.log(allPeople.length);
// 18. Push all descriptions into an array named `allDescription`
// for(let i=0; i< got.houses.length; i++){
//   const house = got.houses[i];
//   let allDescription;
//   for(let j=0; j<house.people.length; j++){
//     allDescription.push(house.people[j].description);
//   }
//   console.log(allDescription);
// }
// 19. Log the value and length `allDescription`
// console.log(allDescription.length);
// 20. Only the the description whose length is more than 30. (use .length property on string to get the length)
