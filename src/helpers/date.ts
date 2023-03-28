export const DateFormatter = (): string => {
  const initialDate = new Date();
  const s = initialDate.getUTCSeconds();
  const min = initialDate.getUTCMinutes();
  const hh = initialDate.getUTCHours();
  const dd = initialDate.getUTCDate();
  const mm = initialDate.getUTCMonth();

  let ss = '';
  if (s < 10) {
    ss = `0${s}`;
  } else {
    ss = s.toString();
  }

  const yy = initialDate.getUTCFullYear();
  return `${dd}/${mm}/${yy} ${hh}:${min}:${ss}`;
};
