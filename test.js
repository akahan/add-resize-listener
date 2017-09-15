const addResizeListener = require('./index.js');

it(`doesn't error for add`, () => {
  const el = document.createElement('div');
  const fn = jest.fn();
  addResizeListener(el, fn);
  expect(fn).not.toHaveBeenCalled();
});


it(`doesn't error for unsub`, () => {
  const el = document.createElement('div');
  const fn = jest.fn();
  const unsub = addResizeListener(el, fn);
  unsub();
  expect(fn).not.toHaveBeenCalled();
});

it(`doesn't error for removeResizeListener`, () => {
  const el = document.createElement('div');
  const fn = jest.fn();
  addResizeListener(el, fn);
  addResizeListener.removeResizeListener(el, fn);
  expect(fn).not.toHaveBeenCalled();
});

