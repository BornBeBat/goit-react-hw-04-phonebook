export const filterArray = (array, value) => {
  return array.filter(elem =>
    elem.name.toLowerCase().includes(value.toLowerCase())
  );
};
