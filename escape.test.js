const escape = require('./escape');

test('escape undefined returns undefined', () => {
  expect(escape(void 0)).toBeUndefined();
});

test('escape null returns null', () => {
  expect(escape(null)).toBeNull();
});

test('escape "" returns ""', () => {
  expect(escape('')).toBe('');
});

test('escape "\x01" returns "\x01"', () => {
  expect(escape('\x01')).toBe('\x01');
});

test('escape " " returns " "', () => {
  expect(escape(' ')).toBe(' ');
});

test('escape 0 returns 0', () => {
  expect(escape(0)).toBe(0);
});

test('escape -1 returns -1', () => {
  expect(escape(-1)).toBe(-1);
});

test('escape false returns false', () => {
  expect(escape(false)).toBe(false);
});

test('escape true returns true', () => {
  expect(escape(true)).toBe(true);
});

test('escape {a:1} returns {a:1}', () => {
  expect(escape({a:1})).toEqual({a:1});
});

test('escape "<" returns "&lt;"', () => {
  expect(escape('<')).toBe('&lt;');
});

test('escape ">" returns "&gt;"', () => {
  expect(escape('>')).toBe('&gt;');
});

test('escape "&" returns "&amp;"', () => {
  expect(escape('&')).toBe('&amp;');
});

test('escape "\"" returns "&quot;"', () => {
  expect(escape('"')).toBe('&quot;');
});

test('escape "\'" returns "&apos;"', () => {
  expect(escape('\'')).toBe('&apos;');
});

test('escape "`" returns "&#96;"', () => {
  expect(escape('`')).toBe('&#96;');
});

test('escape "!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\" returns "!&quot;#$%&amp;&apos;()*+,-./0123456789:;&lt;=&gt;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_&#96;abcdefghijklmnopqrstuvwxyz{|}~"', () => {
  expect(escape('!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'))
    .toBe('!&quot;#$%&amp;&apos;()*+,-./0123456789:;&lt;=&gt;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_&#96;abcdefghijklmnopqrstuvwxyz{|}~');
});
