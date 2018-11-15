'use strict';

function check(hex) {
  if (typeof hex !== 'string') return false;
  const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
  let result = hexPattern.test(hex);
  return result;
}

exports.check = check;
