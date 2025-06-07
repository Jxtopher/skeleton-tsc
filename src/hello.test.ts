import { hello } from './hello';

test('hello returns greeting with name', () => {
  expect(hello('World')).toBe('Hello, World');
});
