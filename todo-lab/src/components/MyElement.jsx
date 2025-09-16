import { createElement } from 'react';

// React createElement example
export default function MyElement() {
  return createElement(
    'div', // Type of element (e.g., 'div', 'span', or a custom component)
    { className: 'container' }, // Props object
    'Hello, ', // Children (can be strings, other elements, or arrays of elements)
    createElement('span', null, 'World!')
  );
}