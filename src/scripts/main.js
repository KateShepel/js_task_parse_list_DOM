'use strict';

const getList = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function sortList(list) {
  list.sort((a, b) => {
    const numA = toNumber(a.dataset.salary);
    const numB = toNumber(b.dataset.salary);

    return numB - numA;
  });
}

function toNumber(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result += str[i];
    }
  }

  return +result;
}

sortList(getList);

ul.replaceWith(...getList);
