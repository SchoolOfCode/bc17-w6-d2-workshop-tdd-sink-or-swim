import { calculateScrabbleScore } from "./scrabble-score";
import { test, expect } from 'vitest';

test("The Score is", () => {
    expect(calculateScrabbleScore("A")).toBe(1);
})