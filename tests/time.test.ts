import { getDurationSince } from "../src/services/time";

describe('Time Service', () => {
  beforeAll(() => {
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  });
  
  test('Try to get the time difference for 1 second', () => {
    const taskDate = new Date('2024-04-12T12:29:59');
  
    expect(getDurationSince(taskDate)).toBe('1 second');
  });
  
  test('Try to get the time difference for 53 seconds', () => {
    // Stop the time to have a fixed date
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  
    const taskDate = new Date('2024-04-12T12:29:07');
  
    expect(getDurationSince(taskDate)).toBe('53 seconds');
  });
  
  
  test('Try to get the time difference for 1 min', () => {
    // Stop the time to have a fixed date
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  
    const taskDate = new Date('2024-04-12T12:29:00');
  
    expect(getDurationSince(taskDate)).toBe('1 minute');
  });
  
  test('Try to get the time difference for 2 mins', () => {
    // Stop the time to have a fixed date
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  
    const taskDate = new Date('2024-04-12T12:28:00');
  
    expect(getDurationSince(taskDate)).toBe('2 minutes');
  });
  
  test('Try to get the time difference for 1 hour', () => {
    // Stop the time to have a fixed date
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  
    const taskDate = new Date('2024-04-12T11:29:50');
  
    expect(getDurationSince(taskDate)).toBe('1 hour');
  });
  
  
  test('Try to get the time difference for 5 hour', () => {
    // Stop the time to have a fixed date
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  
    const taskDate = new Date('2024-04-12T07:30:00');
  
    expect(getDurationSince(taskDate)).toBe('5 hours');
  });
  
  test('Try to get the time difference for 1 day', () => {
    // Stop the time to have a fixed date
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  
    const taskDate = new Date('2024-04-11T07:30:00');
  
    expect(getDurationSince(taskDate)).toBe('1 day');
  });
  
  test('Try to get the time difference for 3 days', () => {
    // Stop the time to have a fixed date
    jest.useFakeTimers()
      .setSystemTime(new Date('2024-04-12T12:30:00'));
  
    const taskDate = new Date('2024-04-09T07:30:00');
  
    expect(getDurationSince(taskDate)).toBe('3 days');
  });
});
