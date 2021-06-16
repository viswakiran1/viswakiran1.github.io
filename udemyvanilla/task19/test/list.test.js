const richestPeople = require('./list')

test('contains richest people', () => {
    expect(richestPeople).toContain('Mark Zuckerberg');
    
  });