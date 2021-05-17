export const toUpperFirstSign = value =>
  value[0].toUpperCase() + value.slice(1).toLowerCase();

export const getCapitalizedText = value =>
  value.split('_').map(toUpperFirstSign).join(' ');

export const getLowercaseText = value => {
  let arrayData = value.split('_');
  return arrayData
    .map((item, index) => {
      return !index ? toUpperFirstSign(item) : item.toLowerCase();
    })
    .join(' ');
};
