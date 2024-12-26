function printAllNumbersWithForLoop(numbers: number[]): void {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    numbers.push(numbers[i] * 2); //Adding this will now work correctly
  }
}

const numbers: number[] = [1, 2, 3, 4, 5];
printAllNumbersWithForLoop(numbers); //This works as expected