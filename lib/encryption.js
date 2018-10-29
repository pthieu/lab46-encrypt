const crypto = require('crypto');

const IV_LENGTH = 16; // XXX(Phong): always 16 for AES

const encrypt = ({ data, KEY }) => {
  if (!KEY || KEY.length !== 32) {
    throw new Error('KEY needs to be 256-bit/32 characters for AES-256');
  }
  const IV = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', KEY, IV);

  let encrypted = cipher.update(data);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return IV.toString('hex') + ':' + encrypted.toString('hex');
};

const decrypt = ({ data, KEY }) => {
  const dataParts = data.split(':');
  const IV = Buffer.from(dataParts.shift(), 'hex');
  const encrypted = Buffer.from(dataParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', KEY, IV);

  let decrypted = decipher.update(encrypted);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
};

function randomKey(length = 32) {
  // XXX(Phong): Should be 32 characters/256 bits for AES-256
  const random = [...Array(length)]
    .map((_) => (~~(Math.random() * 36)).toString(36)) // eslint-disable-line
    .join('');
  return random;
}

module.exports = {
  decrypt,
  encrypt,
  randomKey,
};
