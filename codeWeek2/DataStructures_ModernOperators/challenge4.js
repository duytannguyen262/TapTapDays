const data = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];

data.map((word, index) => {
  const [first, second] = word.toLowerCase().split("_");
  const camelCasedWord =
    first + second.charAt(0).toUpperCase() + second.slice(1);

  console.log(camelCasedWord.concat("✅".repeat(index + 1)));
});
