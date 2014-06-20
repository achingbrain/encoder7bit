var Encoder7Bit = require('../index'),
  expect = require('chai').expect

describe('Encoder7Bit', function () {

  it('should encode and decode bytes', function () {
    var data = []

    for(var i = 0; i < 256; i++) {
      data[i] = i
    }

    var encoded = Encoder7Bit.to7BitArray(data)
    var decoded = Encoder7Bit.from7BitArray(encoded)

    expect(decoded.length).to.equal(data.length)

    for(var i = 0; i < 256; i++) {
      expect(decoded[i]).to.equal(data[i])
    }
  })
})
