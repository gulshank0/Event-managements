import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { Libre_Barcode_128 } from "next/font/google";


function Header() {
  return (
    <nav className='mx-auto py-2 px-4  flex justify-between items-center shadow-md border-b-2'>

      <Link href={"/"} className="flex items-center">

        <Image src="/youtubee.png" width="50"
          height="30"
          alt="Event-logo" className="h-16 w-auto flex justify-center " />
      </Link>
      <div> <input className=" border-2 border-gray-400 bg-gray-200 rounded-sm px-4 py-1 " />
        <Button className="bg-white-200 text-black-400 ">Search</Button>
      </div>

      <div className="flex items-center gap-4">
        <Link href="events?create=true">
          <Button className="flex items-center gap-2 ">
            <PenBox size={18} /> Create events </Button>
        </Link>

        <Button variant="outline" > Login </Button>
      </div>




    </nav>

  )
}

export default Header;
