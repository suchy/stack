import { describe, expect, it } from 'vitest';

import { Stack } from './stack';

describe('Stack', () => {
  it('should return empty stack', () => {
    const stack = Stack();
    expect(stack.length).toStrictEqual(0);
  });

  it('should return stack with elements', () => {
    const stack = Stack('lorem', 'ipsum');

    expect(stack.length).toStrictEqual(2);
    expect(stack.top).toBe('ipsum');
  });

  describe('length', () => {
    it('should return 0 if stack is empty', () => {
      const stack = Stack();
      expect(stack.length).toBe(0);
    });

    it('should return number of stack elements', () => {
      const stack = Stack('lorem', 'ipsum', 'dolor');
      expect(stack.length).toBe(3);
    });
  });

  describe('pop', () => {
    it('should return an array with two elements: new stack without removed element and removed element', () => {
      const stack = Stack('lorem', 'ipsum');
      const [newStack, removedElement] = stack.pop();

      expect(newStack.length).toBe(1);
      expect(newStack.top).toBe('lorem');
      expect(removedElement).toBe('ipsum');
    });

    it('should return an array with two elements: new stack and undefined if stack was empty', () => {
      const stack = Stack();
      const [newStack, removedElement] = stack.pop();

      expect(newStack.length).toBe(0);
      expect(newStack.top).toBeUndefined();
      expect(removedElement).toBeUndefined();
    });
  });

  describe('push', () => {
    it('should return new stack, with added element on the top of stack', () => {
      const stack = Stack();
      const updatedStack = stack.push('lorem');

      expect(updatedStack.top).toBe('lorem');
      expect(updatedStack.length).toBe(1);
    });

    it('should return stack', () => {
      const stack = Stack();
      const newStack = stack.push('lorem');

      expect(newStack.length).toBe(1);
    });
  });

  describe('toArray()', () => {
    it('should return array of stack elements', () => {
      const stack = Stack('lorem', 'ipsum');
      expect(stack.toArray()).toStrictEqual(['lorem', 'ipsum']);
    });

    it('should empty array if stack was empty', () => {
      const stack = Stack();
      expect(stack.toArray()).toStrictEqual([]);
    });
  });

  describe('top', () => {
    it('should return top element from stack', () => {
      const stack = Stack('lorem');
      expect(stack.top).toBe('lorem');
    });

    it('should return undefined if stack is empty', () => {
      const stack = Stack();
      expect(stack.top).toBeUndefined();
    });
  });
});
