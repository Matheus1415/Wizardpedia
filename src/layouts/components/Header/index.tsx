import { useState } from "react";
import { Group, Burger, Drawer, ScrollArea, Box } from "@mantine/core";
import { NavLink } from "react-router";

const links = [
  { link: "/", label: "Home" },
  { link: "/students", label: "Students" },
  { link: "/spells", label: "Spells" },
  { link: "/houses", label: "Houses" },
  { link: "/staff", label: "Staff" },
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
          `${isActive ? "text-primary" : "text-white"} ${
            isMobile ? "d-block py-2 text-center" : "text-decoration-none mx-2"
          }`
        }
        onClick={isMobile ? closeDrawer : undefined}
      >
        {link.label}
      </NavLink>
    ));

  return (
    <Box pb={20} className="d-flex justify-content-center align-items-center">
      <header>
        <div className="container d-flex justify-content-between align-items-center py-2">
          <Group className="d-none d-sm-flex">
            {renderLinks()}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className="d-sm-none"
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
        transitionDuration={300}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <div>{renderLinks(true)}</div>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
