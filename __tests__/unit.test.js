// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// -- isPhoneNumber TESTS --

test('PHONE NUMBER: (012) 345-6789 passes', () => {
  expect(isPhoneNumber('(111) 111-1111')).toBe(true);
});

test('PHONE NUMBER: 012-345-6789 passes', () => {
  expect(isPhoneNumber('012-345-6789')).toBe(true);
});

test('PHONE NUMBER: THE-BIG-DUCK fails', () => {
  expect(isPhoneNumber('THE-BIG-DUCK')).toBe(false);
});

test('PHONE NUMBER: 123456789 fails', () => {
  expect(isPhoneNumber('123456789')).toBe(false);
});

// -- isEmail TESTS --

test('EMAIL: test@site.com passes', () => {
  expect(isEmail('test@site.com')).toBe(true);
});

test('EMAIL: TEST@SITE.CO passes', () => {
  expect(isEmail('TEST@SITE.CO')).toBe(true);
});

test('EMAIL: k3wl@k1dz.com fails', () => {
  expect(isEmail('k3wl@k1dz.com')).toBe(false);
});

test('EMAIL: test@site.commercial fails', () => {
  expect(isEmail('test@site.commercial')).toBe(false);
});

// -- isStrongPassword TESTS --

test('PASSWORD: StrongPassword passes', () => {
  expect(isStrongPassword('StrongPassword')).toBe(true);
});

test('PASSWORD: I_LOVE_CS passes', () => {
  expect(isStrongPassword('I_LOVE_CS')).toBe(true);
});

test('PASSWORD: abc fails', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('PASSWORD: aReallyLongPassword fails', () => {
  expect(isStrongPassword('aReallyLongPassword')).toBe(false);
});

// -- isDate TESTS --

test('DATE: 01/01/2001 passes', () => {
  expect(isDate('01/01/2001')).toBe(true);
});

test('DATE: 1/1/2001 passes', () => {
  expect(isDate('1/1/2001')).toBe(true);
});

test('DATE: 01/01/01 fails', () => {
  expect(isDate('01/01/01')).toBe(false);
});

test('DATE: he/ll/oooo fails', () => {
  expect(isDate('he/ll/oooo')).toBe(false);
});

// -- isHexColor TESTS --

test('HEX COLOR: #FFF passes', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('HEX COLOR: #000000 passes', () => {
  expect(isHexColor('#000000')).toBe(true);
});

test('HEX COLOR: #1234 fails', () => {
  expect(isHexColor('#1234')).toBe(false);
});

test('HEX COLOR: #HUZZAH fails', () => {
  expect(isHexColor('#HUZZAH')).toBe(false);
});