'use client';

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="row">
      <span className="count">{count}</span>
      <button onClick={() => setCount((c) => c + 1)}>Suurenda</button>
    </div>
  );
}
