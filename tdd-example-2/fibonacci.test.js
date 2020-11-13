const fibonacci = require("./fibonacci");

function randomNumber() {
  return Math.floor(Math.random());
}


test("Must return 0 for 0", () => {
  const result = fibonacci(0);

  expect(result).toBe(0);
});


test("Must return 1 for 1", () => {
  const result = fibonacci(1);

  expect(result).toBe(1);
});

test("Must return 1 for 2", () => {
  const result = fibonacci(2);

  expect(result).toBe(1);
});

test("Must return 0 for any negative number", () => {
  const n = -randomNumber();
  const result = fibonacci(n);

  expect(result).toBe(0);
});

test("f(n) must be f(n+2) - f(n+1)", () => {
  const n = randomNumber();
  const result = fibonacci(n);

  expect(result).toBe(fibonacci(n + 2) - fibonacci(n + 1));
});

