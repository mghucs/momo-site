import Image from 'next/image';
import Link from 'next/link';
import HeaderNavLink from './HeaderNavLink';
import SearchField from './SearchField';

const Header = () => {
  return (
    <header className="flex flex-col gap-5">
      <div className="py-4 flex items-center">
        <Link href="/">
          <Image
            width={36}
            height={36}
            src="/favicon.ico"
            className="w-8 md:w-9"
            alt="logo"
          />
        </Link>
        
        <nav className="ml-8 flex gap-x-8 text-gray-900">
          <HeaderNavLink href={"/"}>Home</HeaderNavLink>
          {/* <HeaderNavLink href={"/products"}>Products</HeaderNavLink> */}
        </nav>
        {/* <div className="ml-8 flex-1"><SearchField/></div> */}
      </div>

    </header>
  );
};

export default Header;
