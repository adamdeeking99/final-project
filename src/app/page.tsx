import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <title >Sale Finder</title>
    <div><h1 id="Title">Sale Finder</h1></div>
    <div >
      
    <Link id="top" href="/src/app">Welcome</Link>
      <h1 id="top">Whats new</h1>
     
      <Link id="top" href="/Login">Log-in</Link>
  
   <Image id="top" src="/shopping-cart.png" 
           alt= "shopping cart"
           width={200}
           height={200}/> 

<a href="https://www.amazon.com/Ninja-Specialty-Single-Serve-Compatible-PB051GB/dp/B0D1LP9SF1?pd_rd_w=RsEWf&content-id=amzn1.sym.c52723e7-7587-4018-9882-f35c60e6a929&pf_rd_p=c52723e7-7587-4018-9882-f35c60e6a929&pf_rd_r=WH0VF8BVS6182CJARTH4&pd_rd_wg=zP3Kv&pd_rd_r=5a76d55f-5a21-45a3-a724-854ec6704504&pd_rd_i=B0D1LP9SF1">
   <img  id="images"src="data:image/jpeg;base64,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"></img>
   </a>
   
   <a href="https://www.amazon.com/Beats-Studio-Pro-Personalized-Compatibility/dp/B0C8PT7DF5?ref=dlx_deals_dg_dcl_B0C8PR4W22_dt_sl14_0c&th=1">
   <img id="images"src="data:image/jpeg;base64,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" ></img>
   </a>

   <a href="https://www.amazon.com/Amazon-vibrant-helpful-routines-Charcoal/dp/B09B8V1LZ3?ref=dlx_deals_dg_dcl_B09B8V1LZ3_dt_sl14_0c">
<img id="images"src="data:image/jpeg;base64,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" />

   </a>

   <h1>Ninja Pods & Grounds Specialty Single-Serve Coffee Maker 20% off</h1>
  <h1>Beats Studio Pro - Wireless Bluetooth Noise Cancelling Headphones 51% off</h1>
<h1>Amazon Echo Dot (newest model) 54% off</h1>
    </div>
    
    
   
   
    



    </div>
   
  );
}
