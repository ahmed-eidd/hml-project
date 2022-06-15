export const limitText = (name, limit = 17) => {
  const newText = [];
  if (name?.length > limit) {
    name.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) newText.push(cur);
      return acc + cur.length;
    }, 0);
    return `${newText.join(' ')} ...`;
  }
  return name;
};