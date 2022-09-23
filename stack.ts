export interface Stack<T> {
  length: number;
  pop: () => [Stack<T>, T | undefined];
  push: (element: T) => Stack<T>;
  toArray: () => T[];
  top?: T;
}

export function Stack<T>(...elements: T[]) {
  const stackElements = Object.freeze(elements);

  const stack: Stack<T> = {
    get length() {
      return stackElements.length;
    },

    pop() {
      const updatedElements = [...elements];
      const removedElement = updatedElements.pop();

      return [Stack(...updatedElements), removedElement];
    },

    push(element) {
      const updatedElements = [...stackElements];
      updatedElements.push(element);

      return Stack(...updatedElements);
    },

    toArray() {
      return [...stackElements];
    },

    get top() {
      return stackElements.at(-1);
    }
  };

  return stack;
}
