"use client"

import Deadpoolwolverinebutton from './Components/DeadpoolandWolverineButtons/Code';
import ShadowFightButton from './Components/ShadowFightButton/Code'
import WarningCard from './Components/WarningCard/Code'
import AnimatedButton from './Components/AnimatedButton/Code'
import Card from './Components/Card/Code';
import CreditCard from './Components/CreditCard/Code'

export default function Home() {


  return (
<>

<div className="grid grid-cols-4 mb-10  gap-y-6  ">

    <Deadpoolwolverinebutton />
    <div className='flex flex-col'>
    <ShadowFightButton />
    <AnimatedButton />
    </div>
    <WarningCard />
    <Card />
    <CreditCard />


</div>

</>
  );
}
