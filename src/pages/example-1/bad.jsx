import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';

function ChildComponent({ count, message, setCount }) {
  console.info('render child component')
  return (
    <div className='space-y-2'>
      <h3 className='text-xl font-semibold'>Child Component</h3>
      <p>Received Count from Parent: {count}</p>
      <p>Received Message from Parent: {message}</p>
      <Button
        onClick={() => {
          setCount(count+1)
        }}
      >Click Me</Button>
    </div>
  );
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from Parent!')
  console.info('render parent component')
  useEffect(() => {
    setMessage(`Button clicked ${count} times!`);
  },[count])

  return (
    <ChildComponent count={count} message={message} setCount={setCount} />
  )
}

export default ParentComponent;