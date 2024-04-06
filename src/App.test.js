import {render} from '@testing-library/react';
import App from './App';

test('renders react component', () => {
  const {container} = render(<App />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const boxes = container.getElementsByClassName('box');

  console.log(boxes.length); // 👉️ 2

  expect(boxes.length).toBe(2);
});
