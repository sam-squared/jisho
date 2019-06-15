/*
  global describe
  global it
  global expect
*/
import { greeting } from './index';

describe('Greeting', () => {
  it('should interpolate strings correctly', () => {
    const input: string = 'Sam';
    const expectedOutput: string = 'Hello, Sam!';
    const result: string = greeting(input);
    expect(result).toEqual(expectedOutput);
  })

  it('should use a default value if no args specified', () => {
    const expectedOutput: string = 'Hello, World!';
    const result: string = greeting();
    expect(result).toEqual(expectedOutput);
  })
})