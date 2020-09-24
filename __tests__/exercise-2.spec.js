const { EventEmitter } = require('../exercises/exercise-2');

describe('exercise 2', () => {
  const mockFunc1 = jest.fn();
  const mockFunc2 = jest.fn();
  const mockFunc3 = jest.fn();

  let subscriber1 = null;
  let subscriber2 = null;
  let subscriber3 = null;

  it('should subscribe events', () => {
    subscriber1 = EventEmitter.subscribe(mockFunc1);
    subscriber2 = EventEmitter.subscribe(mockFunc2);
    subscriber3 = EventEmitter.subscribe(mockFunc3);

    expect(subscriber1).not.toEqual(null);
    expect(subscriber2).not.toEqual(null);
    expect(subscriber3).not.toEqual(null);
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
    subscriber1.unsubscribe();
    EventEmitter.emit('World');
    expect(mockFunc1).toHaveBeenCalledTimes(1);
    expect(mockFunc2).toHaveBeenCalledTimes(2);
    expect(mockFunc3).toHaveBeenCalledTimes(2);
  });
});
