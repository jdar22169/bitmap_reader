module.exports = exports = {};
const fs = require('fs');

const imageFile = fs.readFileSync('../non-palette-bitmap.bmp');

const headers = {};
headers.type = imageFile.toString('ascii',0,2);
headers.size = imageFile.readUInt32LE(2);
headers.pixelStart = imageFile.readUInt32LE(10);


module.exports.transformer = function() {
  var stream = fs.createWriteStream('../newBitmap.bmp');
  for(var i = 0; i < imageFile.length; i++) {
    var data = imageFile[i];
    if(i > headers.pixelStart) {
      var data = 255 - imageFile[i];
    }
    var buffer = new Buffer(1)
    buffer.writeUInt8(data, 0);
    stream.write(buffer);
  }
  stream.end();
};

module.exports.transformer('../non-palette-bitmap.bmp');
