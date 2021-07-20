import calculate from "./calculate";

describe('Calculator operations', () => {

    test('expect return to be 9', () => {
      expect(calculate.add(3, 6)).toBe(9);
    })
  
    test('expect return to be concatenation', () => {
      expect(calculate.add('3', 6)).toBe("36");
    })
  
    test('expect return to be concatenation', () => {
      expect(calculate.add(3, '7')).toBe('37');
    })
  
    test('expect return to be 3', () => {
      expect(calculate.subs(9, 6)).toBe(3);
    })
  
    test('expect to convert from string to integer', () => {
      expect(calculate.subs('7', 6)).toBe(1);
    })
  
    test('expect to return negative numbers', () => {
      expect(calculate.subs(4, '7')).toBe(-3);
    })
  
    test('expect return to be 2', () => {
      expect(calculate.divide(12, 6)).toBe(2);
    })
  
    test('expect to convert from string to integer', () => {
      expect(calculate.divide('18', 6)).toBe(3);
    })
  
    test('expect to return Infinity if divided by 0', () => {
      expect(calculate.divide(12, 0)).toBe(Infinity);
    })
  
    test('expect return to be 10', () => {
      expect(calculate.mult(2, 5)).toBe(10);
    })
  
    test('expect to convert from string to integer', () => {
      expect(calculate.mult('7', 5)).toBe(35);
    })
  
    test('expect return negative number when having one negative factor', () => {
      expect(calculate.mult(-3, 8)).toBe(-24);
    })
  })
