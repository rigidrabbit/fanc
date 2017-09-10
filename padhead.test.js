const padhead = require('./padhead');

test('padhead("", "_", 1) returns "_"', () => {
  expect(padhead('', '_', 1)).toBe('_');
});

test('padhead("", "_", 2) returns "__"', () => {
  expect(padhead('', '_', 2)).toBe('__');
});

test('padhead("", "_", 3) returns "___"', () => {
  expect(padhead('', '_', 3)).toBe('___');
});

test('padhead("", "_", 4) returns "____"', () => {
  expect(padhead('', '_', 4)).toBe('____');
});

test('padhead("x", "_", 1) returns "x"', () => {
  expect(padhead('x', '_', 1)).toBe('x');
});

test('padhead("x", "_", 2) returns "_x"', () => {
  expect(padhead('x', '_', 2)).toBe('_x');
});

test('padhead("x", "_", 3) returns "__x"', () => {
  expect(padhead('x', '_', 3)).toBe('__x');
});

test('padhead("x", "_", 4) returns "___x"', () => {
  expect(padhead('x', '_', 4)).toBe('___x');
});

test('padhead("xyz", "_", 1) returns "xyz"', () => {
  expect(padhead('xyz', '_', 1)).toBe('xyz');
});

test('padhead("xyz", "_", 2) returns "xyz"', () => {
  expect(padhead('xyz', '_', 2)).toBe('xyz');
});

test('padhead("xyz", "_", 3) returns "xyz"', () => {
  expect(padhead('xyz', '_', 3)).toBe('xyz');
});

test('padhead("xyz", "_", 4) returns "_xyz"', () => {
  expect(padhead('xyz', '_', 4)).toBe('_xyz');
});

test('padhead(null, "_", 1) returns "_"', () => {
  expect(padhead(null, '_', 1)).toBe('_');
});

test('padhead(null, "_", 2) returns "__"', () => {
  expect(padhead(null, '_', 2)).toBe('__');
});

test('padhead(null, "_", 3) returns "___"', () => {
  expect(padhead(null, '_', 3)).toBe('___');
});

test('padhead(null, "_", 4) returns "____"', () => {
  expect(padhead(null, '_', 4)).toBe('____');
});

test('padhead(void 0, "_", 1) returns "_"', () => {
  expect(padhead(void 0, '_', 1)).toBe('_');
});

test('padhead(void 0, "_", 2) returns "__"', () => {
  expect(padhead(void 0, '_', 2)).toBe('__');
});

test('padhead(void 0, "_", 3) returns "___"', () => {
  expect(padhead(void 0, '_', 3)).toBe('___');
});

test('padhead(void 0, "_", 4) returns "____"', () => {
  expect(padhead(void 0, '_', 4)).toBe('____');
});

test('padhead("0", "_", 1) returns "0"', () => {
  expect(padhead('0', '_', 1)).toBe('0');
});

test('padhead("0", "_", 2) returns "_0"', () => {
  expect(padhead('0', '_', 2)).toBe('_0');
});

test('padhead("0", "_", 3) returns "__0"', () => {
  expect(padhead('0', '_', 3)).toBe('__0');
});

test('padhead("0", "_", 4) returns "___0"', () => {
  expect(padhead('0', '_', 4)).toBe('___0');
});

test('padhead(null, null, 1) returns " "', () => {
  expect(padhead(null, null, 1)).toBe(' ');
});

test('padhead(null, null, 2) returns "  "', () => {
  expect(padhead(null, null, 2)).toBe('  ');
});

test('padhead(null, null, 3) returns "   "', () => {
  expect(padhead(null, null, 3)).toBe('   ');
});

test('padhead(null, null, 4) returns "    "', () => {
  expect(padhead(null, null, 4)).toBe('    ');
});

test('padhead(void 0, void 0, 1) returns " "', () => {
  expect(padhead(void 0, void 0, 1)).toBe(' ');
});

test('padhead(void 0, void 0, 2) returns "  "', () => {
  expect(padhead(void 0, void 0, 2)).toBe('  ');
});

test('padhead(void 0, void 0, 3) returns "   "', () => {
  expect(padhead(void 0, void 0, 3)).toBe('   ');
});

test('padhead(void 0, void 0, 4) returns "    "', () => {
  expect(padhead(void 0, void 0, 4)).toBe('    ');
});

test('padhead("", "123", 1) returns "1"', () => {
  expect(padhead('', '123', 1)).toBe('1');
});

test('padhead("", "123", 2) returns "12"', () => {
  expect(padhead('', '123', 2)).toBe('12');
});

test('padhead("", "123", 3) returns "123"', () => {
  expect(padhead('', '123', 3)).toBe('123');
});

test('padhead("", "123", 4) returns "1231"', () => {
  expect(padhead('', '123', 4)).toBe('1231');
});

test('padhead("", "123", 5) returns "12312"', () => {
  expect(padhead('', '123', 5)).toBe('12312');
});

test('padhead("", "123", 6) returns "123123"', () => {
  expect(padhead('', '123', 6)).toBe('123123');
});

test('padhead("", "123", 7) returns "1231231"', () => {
  expect(padhead('', '123', 7)).toBe('1231231');
});

test('padhead("", "123", 8) returns "12312312"', () => {
  expect(padhead('', '123', 8)).toBe('12312312');
});

test('padhead("x", "123", 1) returns "x"', () => {
  expect(padhead('x', '123', 1)).toBe('x');
});

test('padhead("x", "123", 2) returns "1x"', () => {
  expect(padhead('x', '123', 2)).toBe('1x');
});

test('padhead("x", "123", 3) returns "12x"', () => {
  expect(padhead('x', '123', 3)).toBe('12x');
});

test('padhead("x", "123", 4) returns "123x"', () => {
  expect(padhead('x', '123', 4)).toBe('123x');
});

test('padhead("x", "123", 5) returns "1231x"', () => {
  expect(padhead('x', '123', 5)).toBe('1231x');
});

test('padhead("x", "123", 6) returns "12312x"', () => {
  expect(padhead('x', '123', 6)).toBe('12312x');
});

test('padhead("x", "123", 7) returns "123123x"', () => {
  expect(padhead('x', '123', 7)).toBe('123123x');
});

test('padhead("x", "123", 8) returns "1231231x"', () => {
  expect(padhead('x', '123', 8)).toBe('1231231x');
});

test('padhead("xyz", "123", 1) returns "xyz"', () => {
  expect(padhead('xyz', '123', 1)).toBe('xyz');
});

test('padhead("xyz", "123", 2) returns "xyz"', () => {
  expect(padhead('xyz', '123', 2)).toBe('xyz');
});

test('padhead("xyz", "123", 3) returns "xyz"', () => {
  expect(padhead('xyz', '123', 3)).toBe('xyz');
});

test('padhead("xyz", "123", 4) returns "1xyz"', () => {
  expect(padhead('xyz', '123', 4)).toBe('1xyz');
});

test('padhead("xyz", "123", 5) returns "12xyz"', () => {
  expect(padhead('xyz', '123', 5)).toBe('12xyz');
});

test('padhead("xyz", "123", 6) returns "123xyz"', () => {
  expect(padhead('xyz', '123', 6)).toBe('123xyz');
});

test('padhead("xyz", "123", 7) returns "1231xyz"', () => {
  expect(padhead('xyz', '123', 7)).toBe('1231xyz');
});

test('padhead("xyz", "123", 8) returns "12312xyz"', () => {
  expect(padhead('xyz', '123', 8)).toBe('12312xyz');
});
