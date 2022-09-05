import { addTwoNumbers } from "./addTwoNumbers";

describe("addTwoNumbers", () => {
  it("should add two numbers", () => {
    expect(addTwoNumbers(2, 3)).toEqual(5);
  });
})
