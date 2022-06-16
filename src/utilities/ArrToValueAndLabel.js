export const ArrToValueAndLabel = (arr) => {
  let transfromedArr = [];
  for (let el of arr) {
    transfromedArr.push({
      label: el,
      value: el,
    });
  }

  return transfromedArr;
};
