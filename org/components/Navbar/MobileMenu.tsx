import React, { useContext } from "react"
import {
  MobileMenuWrapper,
  DrawerContentWrapper,
  DrawerHead,
  DrawerLogo,
  DrawerClose,
  HamburgerIcon,
} from "./navbar.style"
import { FiX } from "react-icons/fi"
import Drawer from "../Drawer/drawer"
import { DrawerContext } from "../Drawer/drawerContext"
import Link from "next/link"
import Menu from "./Menu"

type MobileMenuProps = {
  items: any
  logo: string
}

const MobileMenu: React.FunctionComponent<MobileMenuProps> = ({
  items,
  logo,
  ...props
}) => {
  const { state, dispatch }: any = useContext(DrawerContext)

  // Toggle drawer
  const toggleDrawer = () => {
    dispatch({
      type: "TOGGLE",
    })
  }

  return (
    <MobileMenuWrapper {...props}>
      <Drawer
        width="285px"
        placement="left"
        drawerHandler={
          <HamburgerIcon>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        }
        open={state.isOpen}
        toggleHandler={toggleDrawer}
      >
        <DrawerContentWrapper>
          <DrawerHead>
            <DrawerLogo>
              <Link href="/">
                <img src={logo} alt="logo" />
              </Link>
            </DrawerLogo>
            <DrawerClose onClick={toggleDrawer}>
              <FiX />
            </DrawerClose>
          </DrawerHead>
          <Menu items={items} className="mobile-menu" />
        </DrawerContentWrapper>
      </Drawer>
    </MobileMenuWrapper>
  )
}

export default MobileMenu
