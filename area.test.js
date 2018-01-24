const getArea = require('./area.js');

test('area of 2 x 3 to equal 6', () => {
    a = [2,3]
    expect(getArea(a)).toBe(6);
  });

  test('are di impunt non numeri to equal -1', () => {
    a = ['d','g']
    expect(getArea(a)).toBe(-1);
  });

  test('are di impunt non numeri to equal -1', () => {
    a = [10,'g']
    expect(getArea(a)).toBe(-1);
  });

  test('are di impunt negativi deve essere  -1', () => {
    a = [-10,-4]
    expect(getArea(a)).toBe(-1);
  });


  
  
  