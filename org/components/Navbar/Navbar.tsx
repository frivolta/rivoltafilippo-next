import React from "react"

import HeaderWrapper, { NavbarWrapper, Logo, MenuWrapper } from "./navbar.style"
import { DrawerProvider } from "../Drawer/drawerContext"
import MobileMenu from "./MobileMenu"
import Menu from "./Menu"

type NavbarProps = {
  className?: string
}

const MenuItems = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
]

const Navbar: React.FunctionComponent<NavbarProps> = ({
  className,
  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ["header"]

  // Load logo image path
  const LogoImage = "/images/logo-servo-white.svg"

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <HeaderWrapper className={addAllClasses.join(" ")} {...props}>
      <NavbarWrapper className="navbar">
        <DrawerProvider>
          <MobileMenu items={MenuItems} logo={LogoImage} />
        </DrawerProvider>
        <Logo>
          <a href="/">
            <img src={LogoImage} alt="logo" />
          </a>
        </Logo>
        <MenuWrapper>
          <Menu items={MenuItems} />
        </MenuWrapper>
        {/*<NavSearchButton
          type="button"
          aria-label="search"
          onClick={toggleHandle}
        >
          <IoIosSearch size="23px" />
      </NavSearchButton>*/}
      </NavbarWrapper>

      {/*<NavSearchWrapper className={state.toggle === true ? "expand" : ""}>
        <NavSearchFromWrapper>
          <SearchContainer />
          <SearchCloseButton
            type="submit"
            aria-label="close"
            onClick={toggleHandle}
          >
            <IoIosClose />
          </SearchCloseButton>
        </NavSearchFromWrapper>
  </NavSearchWrapper>*/}
    </HeaderWrapper>
  )
}

export default Navbar
