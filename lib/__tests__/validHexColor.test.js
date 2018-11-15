const validHexColor = require('../index.js');
const VALID_HEX_CODE = '#fff';
const INVALID_HEX_CODE = '#02=p';
const INVALID_HEX_CODE_SEVEN = '#fffffff';

describe('validHexColor', () => {
  it('Check for valid Hex Color', () => {
    const testResult = expect(validHexColor.check(VALID_HEX_CODE)).toEqual(true);
    return testResult;
  });

  it('Check for invalid Hex Color', () => {
    const testResult = expect(validHexColor.check(INVALID_HEX_CODE)).toEqual(false);
    return testResult;
  });

  it('Check for Hex code is over 6 characters', () => {
    const testResult = expect(validHexColor.check(INVALID_HEX_CODE_SEVEN)).toEqual(false);
    return testResult;
  });
});
