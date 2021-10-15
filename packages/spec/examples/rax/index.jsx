import { createElement, useEffect } from 'rax';
import Image from 'rax-image';

const unusedVar = 1;

export default (props) => {
  const { uri } = props;
  const source = { uri };
  return <Image className="logo" source={source} />;
};
