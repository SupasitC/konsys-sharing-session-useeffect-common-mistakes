import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ParentComponent = () => {
  const [count, setCount] = useState(1)
  const [person, setPerson] = useState({ 
    name: 'John Doe', 
    age: 25,
    address: {
      city: 'New York',
      state: 'NY',
      family: {
        father: 'John Doe Sr.',
        mother: 'Jane Doe'
      }
    }
  });

  useEffect(() => {
    console.info(person)
  }, [person]);

  return (
    <div className="space-y-4">
    
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Name</Label>
        <Input id="name" onChange={(e) => setPerson({ ...person, name: e.target.value })} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="city">City</Label>
        <Input id="city" onChange={(e) => setPerson({ ...person, address: { ...person.address, city: e.target.value } })} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="father">Father</Label>
        <Input id="father" onChange={(e) => setPerson({ ...person, address: { ...person.address, family: { ...person.address.family, father: e.target.value } } })} />
      </div>
      <Label htmlFor="incrementbutton">Count: {count}</Label>
      <Button className='mx-4' id='incrementbutton' onClick={() => setCount(prev => prev + 1)}>Increment</Button>
      <div>
        <Button id='age' onClick={() => setPerson({ ...person, age: 25 })}>Set Age to 25</Button>
      </div>
    </div>
  )
}

export default ParentComponent
