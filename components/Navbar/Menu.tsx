import React from "react"
import { MenuItemWrapper, MenuItem } from "./navbar.style"
import Link from "next/link"
import { useRouter } from "next/router"
import Button from "../Button/button"
import { AiOutlineUser } from "react-icons/ai"

type MenuProps = {
  items: MenuItemsProps[]
  className?: string
}

type MenuItemsProps = {
  url: string
  label: string
  external?: boolean
}

const Menu: React.FunctionComponent<MenuProps> = ({
  items,
  className,
  ...props
}) => {
  const router = useRouter()
  // Add all classs to an array
  const addAllClasses = ["menu"]

  // className prop checking
  if (className) {
    addAllClasses.push(className)
  }

  return (
    <MenuItemWrapper className={addAllClasses.join(" ")} {...props}>
      {items.map((item, index) => (
        <MenuItem
          key={index}
          className={router.pathname === item.url ? "active-link" : undefined}
        >
          {item.external ? (
            <a href={item.url}>{item.label}</a>
          ) : (
            <Link href={item.url}>{item.label}</Link>
          )}
        </MenuItem>
      ))}
      <Button
        title="Curriculum PDF (IT)"
        icon={<AiOutlineUser />}
        iconPosition="left"
      />
    </MenuItemWrapper>
  )
}

export default Menu
