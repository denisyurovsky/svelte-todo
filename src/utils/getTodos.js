export function getTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: Math.random(),
          text: "Todo item 1",
          checked: false,
        },
        {
          id: Math.random(),
          text: "Todo item 2",
          checked: false,
        },
        {
          id: Math.random(),
          text: "Todo item 3",
          checked: true,
        },
      ]);
    }, 1000);
  });
}
