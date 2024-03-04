import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';

function ChildComponent({ count, message, callbackFunction }) {
  console.info('render child component')
  return (
    <div className='space-y-2'>
      <h3 className='text-xl font-semibold'>Child Component</h3>
      <p>Received Count from Parent: {count}</p>
      <p>Received Message from Parent: {message}</p>
      <Button onClick={callbackFunction}> Click Me</Button>
    </div>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from Parent!');
  const incrementCount = () => {
    setCount(count + 1);
    setMessage(`Button clicked ${count + 1} times!`);
  }

  console.info('render parent component')
  return (
    <ChildComponent
      count={count}
      message={message} 
      callbackFunction={incrementCount}
    />
  );
}

export default ParentComponent;

