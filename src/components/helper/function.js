export const timeHandler = function (time) {
  if (!time) return null;
  if (time <= 60) return `${time} min`;
  return `${Math.floor(time / 60)}hr ${time % 60}min`;
};

export const moneyHandler = function (money) {
  if (10 ** 3 <= money && money < 10 ** 6) {
    return `$${(money / 10 ** 3).toFixed(2)}K`;
  }
  if (10 ** 6 <= money && money < 10 ** 9) {
    return `$${(money / 10 ** 6).toFixed(2)}M`;
  }
  if (10 ** 9 <= money && money < 10 ** 12) {
    return `$${(money / 10 ** 9).toFixed(2)}B `;
  }
};

export const checkLocalStorage = function (id) {
  if (localStorage.getItem(id)) return true;
  return false;
};

export const deleteLocalStorage = function (id) {
  localStorage.removeItem(id);
};
