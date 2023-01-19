export function getTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: Math.random(),
          text: "Todo item 1",
        },
        {
          id: Math.random(),
          text: "Todo item 2",
        },
        {
          id: Math.random(),
          text: "Todo item 3",
        },
      ]);
    }, 1000);
  });
}
