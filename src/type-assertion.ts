let emni: any;
emni = "next level";

console.log((emni as string).length);

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is: ${value} gram`;
  } else if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultNumber = <number>kgToGram(1000);
const resultString = <string>kgToGram(`1000`);
console.log(resultNumber);
console.log(resultString);
