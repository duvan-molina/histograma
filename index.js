const myArray = [1, 1, 2, 2, 4, 4, 5, 5, 1, 1, 1, 1, 2, 2, 3, 5];
let i = 1;

while (i <= 5) {
  let count = 0;
  for (let j = 0; j <= myArray.length; j++) {
    if (myArray[j] === i) count++;
  }
  console.log(`${i}: ${"*".repeat(count)}`);
  i++;
}
