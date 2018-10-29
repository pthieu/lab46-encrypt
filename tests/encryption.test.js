const { encrypt, decrypt, randomKey } = require('../');

describe('encryption', () => {
  const KEY = randomKey();
  const data = {
    foo: 'bar',
    baz: 1,
  };
  const stringifiedData = JSON.stringify(data);

  it('should encrypt and decrypt correctly with 32-bit KEY and string payload', async () => {
    const encryptedData = encrypt({
      data: stringifiedData,
      KEY,
    });
    console.log(encryptedData)
    expect(encryptedData).not.toEqual(stringifiedData);
    const decryptedData = decrypt({ data: encryptedData, KEY });
    expect(JSON.parse(decryptedData)).toEqual(data);
  });

  it('should throw if you pass it anything other than a string', async () => {
    expect(() => {
      encrypt({
        data,
        KEY,
      });
    }).toThrow();
  });

  it('should throw if KEY is <256-bit', async () => {
    expect(() => {
      encrypt({
        data,
        KEY: 'lessThan32Bit',
      });
    }).toThrow();
  });

  it('should throw if KEY is >256-bit', async () => {
    expect(() => {
      encrypt({
        data,
        KEY: 'thisIsWayMoreThan256BitOr32Characters',
      });
    }).toThrow();
  });
});
