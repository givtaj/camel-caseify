import { camelCaseify } from "../src/camelcaseify";

test("convert label to camel case", () => {
  expect(camelCaseify("hello world")).toBe("helloWorld");
  expect(camelCaseify("Hello World")).toBe("helloWorld");
  expect(camelCaseify("hello_world")).toBe("helloWorld");
  expect(camelCaseify("Hello-World")).toBe("helloWorld");
  expect(camelCaseify("some label with spaces")).toBe("someLabelWithSpaces");
  expect(camelCaseify("another_example-with-mixed_separators")).toBe(
    "anotherExampleWithMixedSeparators"
  );
  expect(camelCaseify(" Leading spaces and symbols")).toBe(
    "leadingSpacesAndSymbols"
  );
  expect(camelCaseify("-starting-with-dash")).toBe("startingWithDash");
  expect(camelCaseify("")).toBe("");
  expect(camelCaseify("multiple  consecutive   spaces")).toBe(
    "multipleConsecutiveSpaces"
  );
  expect(camelCaseify("MixedCASE and Different Characters")).toBe(
    "mixedCaseAndDifferentCharacters"
  );
  expect(camelCaseify("numbers123 and symbols!@#")).toBe(
    "numbers123AndSymbols"
  );
  expect(camelCaseify("---leading-trailing---")).toBe("leadingTrailing");
  expect(camelCaseify("normal-case")).toBe("normalCase");
  expect(camelCaseify("UPPER_case_with_LOWER_and-Mixed")).toBe(
    "upperCaseWithLowerAndMixed"
  );
  expect(camelCaseify("_Leading_Underscore")).toBe("leadingUnderscore");
  expect(camelCaseify("Trailing-Underscore_")).toBe("trailingUnderscore");
  expect(camelCaseify("123numbers at the start")).toBe("123NumbersAtTheStart");
  expect(camelCaseify("ends with 123numbers")).toBe("endsWith123Numbers");
});
