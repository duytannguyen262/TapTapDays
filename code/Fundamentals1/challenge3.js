billValues = [275, 40, 430];

for (let i = 0; i < billValues.length; i++) {
  let tip;
  billValues[i] >= 50 && billValues[i] < 300 ? (tip = 0.15) : (tip = 0.2);
  console.log(
    `The bill was ${billValues[i]}, the tip was ${
      billValues[i] * tip
    }, and the total was ${billValues[i] + billValues[i] * tip}`
  );
}
