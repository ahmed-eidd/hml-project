export const extendClasses = (oldClass, newClass, ...moreClasses) => {
  return [oldClass, newClass, ...moreClasses].join(' ');
};


