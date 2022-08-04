data = [17, 21, 23];

const printForecast = (data) => {
  for (let index = 0; index < data.length; index++) {
    console.log(`${data[index]}ºC in ${data[index]} days`);
  }
};

printForecast(data);
