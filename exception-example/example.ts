function doSomethingElse(): void {};


function someLogic(num: number): void {
  if (num <= 10) {
    throw new Error("num can not be lower or equal to 10");
  }
  if (num >= 10) {
    doSomethingElse();
  }
}