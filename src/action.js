export const HOVER = 'HOVER';
export const UNHOVER = 'UNHOVER';

export const hover = id => ({
  type: HOVER,
  id,
});

export const unhover = id => ({
  type: UNHOVER,
  id,
});
