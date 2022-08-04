const bills = [125, 555, 44];
const tips = [];
const total = [];

const calcTip = (bill) => {
  let tip;
  bill >= 50 && bill < 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + calcTip(bills[i]));
}

console.log(tips);
console.log(total);
