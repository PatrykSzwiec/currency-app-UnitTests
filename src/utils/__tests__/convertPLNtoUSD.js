import { convertPLNToUSD } from './../convertPLNToUSD';


describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is string', () => {
    expect(isNaN(convertPLNToUSD('6'))).toBe(true);
    expect(isNaN(convertPLNToUSD('abc'))).toBe(true);
    expect(isNaN(convertPLNToUSD('-543'))).toBe(true);
  });

  it('should return NaN when input is empty', () => {
    expect(isNaN(convertPLNToUSD())).toBe(true);
  });
});