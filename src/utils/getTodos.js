export function getTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: performance.now(),
          text: "Todo item 1",
        },
        {
          id: performance.now(),
          text: "Todo item 2",
        },
        {
          id: performance.now(),
          text: "Todo item 3",
        },
      ]);
    }, 1000);
  });
}
