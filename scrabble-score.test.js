import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from 'vitest';

test("The Score is", () => {
    expect(calculateScrabbleScore("A")).toBe(1);
})

test("The Score is", () => {
    expect(calculateScrabbleScore("B")).toBe(3);

})

test("The Score is", () => {
    expect(calculateScrabbleScore("C")).toBe(3);
})

