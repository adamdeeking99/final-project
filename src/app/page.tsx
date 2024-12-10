import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    
    <div>
      <div></div>
      <h1>ha</h1>
      <h1>ha</h1>
     
      <Link href="logIn.tsx">Log-in</Link>
   <Image  src="shopping-cart.png" 
           alt= "shopping cart"
           width={200}
           height={200}/>
    </div>


    </div>
   
  );
}
