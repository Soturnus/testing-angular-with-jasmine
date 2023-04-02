import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('deve retornar as moedas suportadas(contidas no array)', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR');
  });
});
