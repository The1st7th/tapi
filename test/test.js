
let heyThere = welcome("Hey there");

function welcome(salutation) {
    return function(yourName, yourName2) {
      return `${salutation}! Nice to meet you, ${yourName}!${yourName2}`
    }
  }


console.log(heyThere());
console.log(heyThere("joe","eric"));
console.log(welcome("hello"));

