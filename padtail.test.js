const padtail = require('./padtail');

test('padtail("", "_", 1) returns "_"', () => {
  expect(padtail('', '_', 1)).toBe('_');
});

test('padtail("", "_", 2) returns "__"', () => {
  expect(padtail('', '_', 2)).toBe('__');
});

test('padtail("", "_", 3) returns "___"', () => {
  expect(padtail('', '_', 3)).toBe('___');
});

test('padtail("", "_", 4) returns "____"', () => {
  expect(padtail('', '_', 4)).toBe('____');
});

test('padtail("x", "_", 1) returns "x"', () => {
  expect(padtail('x', '_', 1)).toBe('x');
});

test('padtail("x", "_", 2) returns "x_"', () => {
  expect(padtail('x', '_', 2)).toBe('x_');
});

test('padtail("x", "_", 3) returns "x__"', () => {
  expect(padtail('x', '_', 3)).toBe('x__');
});

test('padtail("x", "_", 4) returns "x___"', () => {
  expect(padtail('x', '_', 4)).toBe('x___');
});

test('padtail("xyz", "_", 1) returns "xyz"', () => {
  expect(padtail('xyz', '_', 1)).toBe('xyz');
});

test('padtail("xyz", "_", 2) returns "xyz"', () => {
  expect(padtail('xyz', '_', 2)).toBe('xyz');
});

test('padtail("xyz", "_", 3) returns "xyz"', () => {
  expect(padtail('xyz', '_', 3)).toBe('xyz');
});

test('padtail("xyz", "_", 4) returns "xyz_"', () => {
  expect(padtail('xyz', '_', 4)).toBe('xyz_');
});

test('padtail(null, "_", 1) returns "_"', () => {
  expect(padtail(null, '_', 1)).toBe('_');
});

test('padtail(null, "_", 2) returns "__"', () => {
  expect(padtail(null, '_', 2)).toBe('__');
});

test('padtail(null, "_", 3) returns "___"', () => {
  expect(padtail(null, '_', 3)).toBe('___');
});

test('padtail(null, "_", 4) returns "____"', () => {
  expect(padtail(null, '_', 4)).toBe('____');
});

test('padtail(void 0, "_", 1) returns "_"', () => {
  expect(padtail(void 0, '_', 1)).toBe('_');
});

test('padtail(void 0, "_", 2) returns "__"', () => {
  expect(padtail(void 0, '_', 2)).toBe('__');
});

test('padtail(void 0, "_", 3) returns "___"', () => {
  expect(padtail(void 0, '_', 3)).toBe('___');
});

test('padtail(void 0, "_", 4) returns "____"', () => {
  expect(padtail(void 0, '_', 4)).toBe('____');
});

test('padtail("0", "_", 1) returns "0"', () => {
  expect(padtail('0', '_', 1)).toBe('0');
});

test('padtail("0", "_", 2) returns "0_"', () => {
  expect(padtail('0', '_', 2)).toBe('0_');
});

test('padtail("0", "_", 3) returns "0__"', () => {
  expect(padtail('0', '_', 3)).toBe('0__');
});

test('padtail("0", "_", 4) returns "0___"', () => {
  expect(padtail('0', '_', 4)).toBe('0___');
});

test('padtail(null, null, 1) returns " "', () => {
  expect(padtail(null, null, 1)).toBe(' ');
});

test('padtail(null, null, 2) returns "  "', () => {
  expect(padtail(null, null, 2)).toBe('  ');
});

test('padtail(null, null, 3) returns "   "', () => {
  expect(padtail(null, null, 3)).toBe('   ');
});

test('padtail(null, null, 4) returns "    "', () => {
  expect(padtail(null, null, 4)).toBe('    ');
});

test('padtail(void 0, void 0, 1) returns " "', () => {
  expect(padtail(void 0, void 0, 1)).toBe(' ');
});

test('padtail(void 0, void 0, 2) returns "  "', () => {
  expect(padtail(void 0, void 0, 2)).toBe('  ');
});

test('padtail(void 0, void 0, 3) returns "   "', () => {
  expect(padtail(void 0, void 0, 3)).toBe('   ');
});

test('padtail(void 0, void 0, 4) returns "    "', () => {
  expect(padtail(void 0, void 0, 4)).toBe('    ');
});

test('padtail("", "123", 1) returns "1"', () => {
  expect(padtail('', '123', 1)).toBe('1');
});

test('padtail("", "123", 2) returns "12"', () => {
  expect(padtail('', '123', 2)).toBe('12');
});

test('padtail("", "123", 3) returns "123"', () => {
  expect(padtail('', '123', 3)).toBe('123');
});

test('padtail("", "123", 4) returns "1231"', () => {
  expect(padtail('', '123', 4)).toBe('1231');
});

test('padtail("", "123", 5) returns "12312"', () => {
  expect(padtail('', '123', 5)).toBe('12312');
});

test('padtail("", "123", 6) returns "123123"', () => {
  expect(padtail('', '123', 6)).toBe('123123');
});

test('padtail("", "123", 7) returns "1231231"', () => {
  expect(padtail('', '123', 7)).toBe('1231231');
});

test('padtail("", "123", 8) returns "12312312"', () => {
  expect(padtail('', '123', 8)).toBe('12312312');
});

test('padtail("x", "123", 1) returns "x"', () => {
  expect(padtail('x', '123', 1)).toBe('x');
});

test('padtail("x", "123", 2) returns "x1"', () => {
  expect(padtail('x', '123', 2)).toBe('x1');
});

test('padtail("x", "123", 3) returns "x12"', () => {
  expect(padtail('x', '123', 3)).toBe('x12');
});

test('padtail("x", "123", 4) returns "x123"', () => {
  expect(padtail('x', '123', 4)).toBe('x123');
});

test('padtail("x", "123", 5) returns "x1231"', () => {
  expect(padtail('x', '123', 5)).toBe('x1231');
});

test('padtail("x", "123", 6) returns "x12312"', () => {
  expect(padtail('x', '123', 6)).toBe('x12312');
});

test('padtail("x", "123", 7) returns "x123123"', () => {
  expect(padtail('x', '123', 7)).toBe('x123123');
});

test('padtail("x", "123", 8) returns "x1231231"', () => {
  expect(padtail('x', '123', 8)).toBe('x1231231');
});

test('padtail("xyz", "123", 1) returns "xyz"', () => {
  expect(padtail('xyz', '123', 1)).toBe('xyz');
});

test('padtail("xyz", "123", 2) returns "xyz"', () => {
  expect(padtail('xyz', '123', 2)).toBe('xyz');
});

test('padtail("xyz", "123", 3) returns "xyz"', () => {
  expect(padtail('xyz', '123', 3)).toBe('xyz');
});

test('padtail("xyz", "123", 4) returns "xyz1"', () => {
  expect(padtail('xyz', '123', 4)).toBe('xyz1');
});

test('padtail("xyz", "123", 5) returns "xyz12"', () => {
  expect(padtail('xyz', '123', 5)).toBe('xyz12');
});

test('padtail("xyz", "123", 6) returns "xyz123"', () => {
  expect(padtail('xyz', '123', 6)).toBe('xyz123');
});

test('padtail("xyz", "123", 7) returns "xyz1231"', () => {
  expect(padtail('xyz', '123', 7)).toBe('xyz1231');
});

test('padtail("xyz", "123", 8) returns "xyz12312"', () => {
  expect(padtail('xyz', '123', 8)).toBe('xyz12312');
});
