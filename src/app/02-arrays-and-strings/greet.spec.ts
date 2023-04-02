import { greet } from './greet';

describe('greet', () => {
  it('deve retornar o nome inserido no input', () => {
    expect(greet('Rivaldo')).toContain('Rivaldo');
  });
});
