import { createElement, useEffect } from 'rax';

import './index.css';

const unusedVar = 1;

export default () => {
  useEffect(() => {
    useEffect(() => {
      console.log(2);
    });
  }, []);
  return (
    <div> // 3f </div>
  );
};
