const mark = {
  name: "Mark",
  weight: 95,
  height: 1.88,
};

const john = {
  name: "John",
  weight: 85,
  height: 1.76,
};

function calculateBMI(weight, height) {
  return weight / (height * height);
}

markBMI = calculateBMI(mark.weight, mark.height);
johnBMI = calculateBMI(john.weight, john.height);

const markHigherBMI = markBMI > johnBMI;

markHigherBMI
  ? console.log(`"Mark's BMI(${markBMI}) is higher than John's (${johnBMI})!`)
  : console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})!`);
