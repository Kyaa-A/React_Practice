import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Banana", "Cherry", "Pineapple", "Orange"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Banana", price: 7, emoji: "🍌", soldout: false  },
    { name: "Cherry", price: 2, emoji: "🍒", soldout: true  },
    { name: "Pineapple", price: 5, emoji: "🍍", soldout: true  },
    { name: "Orange", price: 8, emoji: "🍊", soldout: false  },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          name={fruit.name}
          price={fruit.price}
          emoji={fruit.emoji}
          soldout={fruit.soldout}
        />
      ))}
    </div>
  );
}
