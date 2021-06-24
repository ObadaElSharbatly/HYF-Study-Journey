// the code in this example works correctly
//  take a minute to study it JS Tutor or the debugger

// checks if both values are a number
//  if either value is not a number, it rejects the value
//  else it returns the sum of both numbers
const add = (x, y) => {
  if (typeof x !== 'number') {
    return 'x is not a number';
  }
  if (typeof y !== 'number') {
    return 'y is not a number';
  }
  return x + y;
};

// it should add positive numbers
const _1_actual = add(3, 4);
const _1_expected = 7;
console.assert(_1_actual === _1_expected);

// it should add negative numbers
const _2_actual = add(-3, -4);
const _2_expected = -7;
console.assert(_2_actual === _2_expected);

// it should add mixed positive & negative numbers
const _3_actual = add(-1, 1);
const _3_expected = 0;
console.assert(_3_actual === _3_expected);

// it should reject x if x is not a number
const _4_actual = add('3', 4);
const _4_expected = 'x is not a number';
console.assert(_4_actual === _4_expected);

// it should reject y if y is not a number
const _5_actual = add(3, true);
const _5_expected = 'y is not a number';
console.assert(_5_actual === _5_expected);