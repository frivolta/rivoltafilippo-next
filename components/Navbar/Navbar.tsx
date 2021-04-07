import React, { useState } from "react"
import { IoIosSearch, IoIosClose } from "react-icons/io"

import SearchContainer from "../../containers/SearchContainer/SearchContainer"
import HeaderWrapper, {
  NavbarWrapper,
  Logo,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
} from "./navbar.style"
import { DrawerProvider } from "../Drawer/drawerContext"
import Link from "next/link"
import MobileMenu from "./MobileMenu"
import Menu from "./menu"

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
  {
    label: "Latest Project",
    url: "/project-budgety",
  },
  {
    label: "Contact",
    url: "/contact",
  },
]

const Navbar: React.FunctionComponent<NavbarProps> = ({
  className,
  ...props
}) => {
  const [state, setState] = useState({
    toggle: false,
    search: "",
  })

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    })
  }

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
          <Link href="/">
            <img src={LogoImage} alt="logo" />
          </Link>
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
