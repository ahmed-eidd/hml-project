export const ArrToValueAndLabel = (arr) => {
  if (!Array.isArray(arr))
    return new Error('ArrToValueAndLabel did not recive an ARRAY');
  let transfromedArr = [];
  for (let el of arr) {
    transfromedArr.push({
      label: el,
      value: el,
    });
  }

  return transfromedArr;
};
