const { EventEmitter } = require('../exercises/exercise-2');

describe('exercise 2', () => {
  const mockFunc1 = jest.fn();
  const mockFunc2 = jest.fn();
  const mockFunc3 = jest.fn();
  let event1 = null;
  let event2 = null;
  let event3 = null;

  it('should subscribe events', () => {
    event1 = EventEmitter.subscribe(mockFunc1);
    event2 = EventEmitter.subscribe(mockFunc2);
    event3 = EventEmitter.subscribe(mockFunc3);

    expect(event1).not.toEqual(null);
    expect(event2).not.toEqual(null);
    expect(event3).not.toEqual(null);
  });

  it('should emit messages', () => {
    EventEmitter.emit('Hello');
    expect(mockFunc1).toHaveBeenCalled();
    expect(mockFunc2).toHaveBeenCalled();
    expect(mockFunc3).toHaveBeenCalled();
  });

  it('should contain a message', () => {
    expect(mockFunc2.mock.calls[0][0]).toEqual('Hello');
  });

  it('should unsubscribe event', () => {
    event1.unsubscribe();
    EventEmitter.emit('World');
    expect(mockFunc1).toHaveBeenCalledTimes(1);
    expect(mockFunc2).toHaveBeenCalledTimes(2);
    expect(mockFunc3).toHaveBeenCalledTimes(2);
  });
});
