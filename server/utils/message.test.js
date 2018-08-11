let expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'Jen';
    let text = 'Some Message';
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude ({from, text});
    

    // Mine
    // let res = generateMessage('Alex', 'Hello!');

    // expect(res.from).toBe('Alex');
    // expect(res.text).toBe('Hello!');
    // expect(res.createdAt).toBeA('number');

  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Admin';
    let lat = 1;
    let long = 2;
    let url = 'https://www.google.com/maps?q=1,2';
    let message = generateLocationMessage(from, lat, long);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
    // expect(message.url).toBe('https://www.google.com/maps?q=1,2');
  });
});