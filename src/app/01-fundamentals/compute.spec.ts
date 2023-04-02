import { compute } from './compute';

/**
 * describe // describe the suite
 * it //
 */

describe('compute', () => {
  it('deve returnar 0 se a entrada for negativa', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });
  it('deve incrementar 1 se o valor for positivo', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
