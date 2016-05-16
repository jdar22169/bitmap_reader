const fs = require('fs');
const expect = require('chai').expect;
const bitmap = require('../lib/bitmap.js');

describe('bitmap transform', () => {
  it('should invert colors', () => {
    var before = fs.readFileSync('../non-palette-bitmap.bmp');
    var after = bitmap.transformer(before);
    expect(before).to.not.eql(after);
  })
})
