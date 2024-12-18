import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    
    <div>
      
    <Link href="/src/app">Welcome</Link>
      <h1>Whats new</h1>
     
      <Link href="/Login">Log-in</Link>
  
   <Image  src="/shopping-cart.png" 
           alt= "shopping cart"
           width={200}
           height={200}/> 
    </div>
    <div>
    <link></link>
    <link></link>
    <link></link>
    </div>

    </div>
   
  );
}
