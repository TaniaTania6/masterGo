export const toUpperFirstSign = val =>
  val[0].toUpperCase() + val.slice(1).toLowerCase();

export const getCapitalizedText = val =>
  val.split('_').map(toUpperFirstSign).join(' ');

export const getLowercaseText = val => {
  let arrayData = val.split('_');
  return arrayData
    .map((item, index) => {
      return !index ? toUpperFirstSign(item) : item.toLowerCase();
    })
    .join(' ');
};
