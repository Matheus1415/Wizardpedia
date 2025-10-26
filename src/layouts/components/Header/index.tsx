import { useState } from "react";
import { Group, Burger, Drawer, ScrollArea, Box } from "@mantine/core";
import { NavLink } from "react-router";
import { Home, User, Book, Castle, Wand } from "lucide-react";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home", icon: <Home size={20} /> },
  { link: "/students", label: "Students", icon: <User size={20} /> },
  { link: "/spells", label: "Spells", icon: <Wand size={20} /> },
  { link: "/houses", label: "Houses", icon: <Castle size={20} /> },
  { link: "/staff", label: "Staff", icon: <Book size={20} /> },
];

export function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = () => setDrawerOpened((o) => !o);
  const closeDrawer = () => setDrawerOpened(false);

  const renderLinks = (isMobile = false) =>
    links.map((link) => (
      <NavLink
        key={link.label}
        to={link.link}
        className={({ isActive }) =>
          `d-flex align-items-center gap-2
          ${classes.link}
          ${isActive ? "text-info" : "text-white"} ${
            isMobile ? "text-info" : ""
          }`
        }
        onClick={isMobile ? closeDrawer : undefined}
      >
        {link.icon} {link.label}
      </NavLink>
    ));

  return (
    <Box>
      <header className={classes.header}>
        <div className={classes.headerContainer}>
          <div className={classes.logo}>Wizardpedia</div>

          <Group spacing="lg" className="d-none d-sm-flex">
            <div className={classes.navLinks}>{renderLinks()}</div>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className="d-sm-none"
            color="white"
          />
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <div className={classes.drawerLinks}>{renderLinks(true)}</div>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
