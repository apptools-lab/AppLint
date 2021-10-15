import React from 'react';
import './index.css';

export default function Home() {
  return (
    <div class="hello">
      {[1, 2, 3].map(i => <div>{i}</div>)}
    </div>
  );
}
