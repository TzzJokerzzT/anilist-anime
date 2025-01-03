import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarCollapseBtn,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import Image from "next/image";
import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>
          <Link href="./">
            <Image
              className="ml-6"
              src="/logo.svg"
              alt="Anilist Logo"
              width={50}
              height={50}
            />
          </Link>
        </NavbarBrand>
        <NavbarList>
          <NavbarItem>
            <Button className="m-1 text-[#2e2e2e] border-[#2e2e2e] hover:text-white bg-[#4fc4cf] rounded-md h-8 focus:bg-[#4fc4cf] active:text-white before:bg-white">
              <Link href="./">Home</Link>
            </Button>
          </NavbarItem>
          <NavbarItem className="flex justify-center items-center">
            <Button className="m-1  text-[#2e2e2e]  border-[#2e2e2e] hover:text-white bg-[#4fc4cf] rounded-md h-8 focus:bg-[#4fc4cf] active:text-white before:bg-white">
              <Link href="./favorite">Favorites</Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button className="m-1 text-[#2e2e2e] border-[#2e2e2e] hover:text-white bg-[#4fc4cf] rounded-md h-8 focus:bg-[#4fc4cf] active:text-white before:bg-white">
              <Link href="https://github.com/TzzJokerzzT">Github</Link>
            </Button>
          </NavbarItem>
        </NavbarList>
        <NavbarList></NavbarList>
        <NavbarCollapseBtn />
        <NavbarCollapse>
          <NavbarItem>
            <Link href="./">Home</Link>
          </NavbarItem>
          <NavbarItem>
            {" "}
            <Link href="./favorite">Favorites</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="https://github.com/TzzJokerzzT">Github</Link>
          </NavbarItem>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
};
