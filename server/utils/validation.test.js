const expect = require('expect');

// import isRealString
const {isRealString} = require('./validation');

// isRealString
  // should reject non-string values
  // should reject string with only spaces
  // should allow string with non-space characters

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let res = isRealString(3);

    expect(res).toBe(false);
  });

  it('should reject string with only spaces', () => {
    let res = isRealString('       ');

    expect(res).toBe(false);
  });

  it('should allow string with non-space characters', () => {
    let res = isRealString('   Hi there    ');

    expect(res).toExist();
  });
});