'use strict'
const fs = require('fs');
const expect = require('chai').expect;
const bitmap = require('../lib/bitmap.js');

describe('bitmap transform', () => {
  before((done) => {
    let imageFile = fs.readFileSync(__dirname + '/../non-palette-bitmap.bmp')
    done();
    })

  it('should read headers', () => {
    let expected = {};
    expected.type = imageFile.toString('ascii',0,2)
    expected.size = imageFile.readUInt32LE(2);
    expected.pixelStart = imageFile.readUInt32LE(10);
    let results = bitmap.headers
    expect(expected).to.eql(results)
  })
  it('should invert colors', () => {
    // var before = fs.readFileSync('../non-palette-bitmap.bmp');
    // var after = bitmap.transformer(before);
    // expect(before).to.not.eql(after);
  })
})
