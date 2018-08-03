let expect = require('expect');

let {generateMessage} = require('./message');

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