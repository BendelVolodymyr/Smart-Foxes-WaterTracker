const getFirstLetter = (string) => {
  if (string === '' || string === undefined) return;
  const arr = string.split('');
  return arr[0].toUpperCase();
};
export default getFirstLetter;
