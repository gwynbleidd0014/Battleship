import { RuleTester } from "eslint";
import add from "../src/js/app";

test("Adds numbers", () => expect(add(2, 3)).toBe(5));
