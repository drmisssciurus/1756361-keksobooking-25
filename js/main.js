const getRandomInteger = (min, max) => {
  if (max <= min) {
    throw new Error(`Максимальное ${max} число не может быть меньше или равно ${min}`);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, count) => {
  if (max <= min) {
    throw new Error(`Максимальное ${max} число не может быть меньше или равно ${min}`);
  }
  return (min + Math.random() * (max - min)).toFixed(count);
};

getRandomInteger(1,2);
getRandomFloat(1,10, 5);
