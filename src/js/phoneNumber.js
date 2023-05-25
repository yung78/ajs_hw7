export default function phoneNumber(number) {
  // Только для наших номеров в любом формате, можно собрать любой нужный формат
  // const regex = /((\+\d*)|(8)*)\s*\(*(\d*)\)*\s*[s-]*(\d{3})\s*[s-]*(\d{2})\s*[s-]*(\d{2})/;
  // return console.log(number.replace(regex, '+7'+'$2$3$4$5'));

  const re1 = /\W/g;
  const re2 = /^\d/;

  if (number.includes('+')) {
    return `+${number.replace(re1, '')}`;
  }
  return `+7${number.replace(re1, '').replace(re2, '')}`;
}
