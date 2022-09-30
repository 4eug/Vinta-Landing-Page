import Image from "next/image";
import Link from "next/link";


export default function Nav() {
  return (
    
<nav className="px-[17px] sm:px-[130px] py-[23px] md:py-[38px] w-full">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
  <div className="h-[40px] w-[40px] relative text-xl">
    <Link href="/">
  <a className="flex items-center">
  <Image
          layout="fill"
          objectFit="contain"
          priority
          src={"/logo.svg"}
          alt="logo"
        />
      <span className="pl-11 pt-2 text-[24px] text-secondary-text-color">Vin<span className="text-white">ta</span></span>
  </a>
  </Link>
  </div>
  <div className="flex md:order-2">
      <button className="inline-flex items-center " onClick={{}}>
        <span className="sr-only">Open main menu</span>
        <svg width="33" height="29.33" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0912 26.0456C23.1037 26.0456 23.9245 26.8664 23.9245 27.8789C23.9245 28.8915 23.1037 29.7123 22.0912 29.7123H5.59118C4.57866 29.7123 3.75785 28.8915 3.75785 27.8789C3.75785 26.8664 4.57866 26.0456 5.59119 26.0456H22.0912ZM31.2579 13.2123C32.2704 13.2123 33.0912 14.0331 33.0912 15.0456C33.0912 16.0581 32.2704 16.8789 31.2579 16.8789H1.92452C0.911997 16.8789 0.0911865 16.0581 0.0911865 15.0456C0.0911865 14.0331 0.911997 13.2123 1.92452 13.2123H31.2579ZM27.5912 0.378937C28.6037 0.378937 29.4245 1.19975 29.4245 2.21227C29.4245 3.22479 28.6037 4.0456 27.5912 4.0456H11.0912C10.0787 4.0456 9.25785 3.22479 9.25785 2.21227C9.25785 1.19975 10.0787 0.378937 11.0912 0.378937H27.5912Z" fill="white"/>
        </svg>
    </button>
  </div>
  
  </div>
</nav>

  );
}
