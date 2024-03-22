import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Plus, Settings2 } from "lucide-react"

const ParentComponent = () => {
  const [count, setCount] = useState(1)
  const [person, setPerson] = useState({ 
    name: 'John Doe', 
    age: 25,
    family: {
      father: {
        name: 'John Doe Sr.',
        address: {
          city: 'New York',
          state: 'NY',
        }
      },
      mother: 'Jane Doe'
    },
    address: {
      city: 'New York',
      state: 'NY',
    }
  });

  useEffect(() => {
    console.info('person from useEffect: ', person)
  }, [person]);

  return (
    <div className="space-y-4">
    <div onClick={()=> setTest(numberr)}>asds</div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">My Name</Label>
        <Input id="name" onChange={(e) => {
          setPerson({ ...person, name: e.target.value })
        }} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="city">My City</Label>
        <Input id="city" onChange={(e) => {
          setPerson({
            ...person,
            address: { ...person.address, city: e.target.value }
          })
        }} />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="father">Father Name</Label>
        <Input id="father" onChange={(e) => {
          setPerson({
            ...person,
            family: {
              ...person.family,
              father: { ...person.family.father, name: e.target.value }
            }
          })
        }} />
      </div>
      <div className="flex items-center">
        <Label htmlFor="incrementbutton" className='text-xl'>Count: {count}</Label>
        <Button className='mx-4 flex items-center' id='incrementbutton' onClick={() => setCount(prev => prev + 1)}><Plus className="mr-2"/> Increment</Button>
      </div>
      <div>
        <Button id='age' onClick={() => setPerson(person)} className='flex items-center'><Settings2 className="mr-2"/> Set Age to 25</Button>
      </div>
    </div>
  )
}

export default ParentComponent

  // 1. ถ้า count เปลี่ยน useEffect จะทำงานไหม?
  // 2. ถ้า person เปลี่ยน useEffect จะทำงานไหม?
  // 3. ถ้าเรียก setPerson แต่เป็นค่าเดิม useEffect จะทำงานไหม?
