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
import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarBrand>{/* <img src={KeepLogo} alt="keep" /> */}</NavbarBrand>
        <NavbarList>
          <NavbarItem>
            <Button className="m-1 text-white border-[#2e2e2e] rounded-md h-8 focus:bg-[#4fc4cf] active:text-white before:bg-white">
              <Link href="./">Home</Link>
            </Button>
          </NavbarItem>
          <NavbarItem className="flex justify-center items-center">
            {" "}
            <Button className="m-1 text-white border-[#2e2e2e] rounded-md h-8 focus:bg-[#4fc4cf] active:text-white before:bg-white">
              <Link href="./favorite">Favorites</Link>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button className="m-1 text-white border-[#2e2e2e] rounded-md h-8 focus:bg-[#4fc4cf] active:text-white before:bg-white">
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
