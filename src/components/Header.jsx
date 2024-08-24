import { Box, IconButton, ListItem } from "@mui/material"
import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import SideDrawer from "./Drawer"

const Header = () => {
  let location = useLocation()
  const navItems = [
    {
      id: 1,
      name: "_hello",
      link: "/",
    },
    {
      id: 2,
      name: "_about-me",
      link: "/about",
    },
    {
      id: 3,
      name: "_projects",
      link: "/projects",
    },
  ]

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setDrawerOpen(open)
  }

  return (
    <nav>
      <Box
        sx={{
          color: "#607B96",
          borderBottom: "1px solid #1E2D3D",
          display: "flex",
        }}
      >
        <Box>
          <ListItem
            sx={{
              borderRight: { xs: "none", lg: "1px solid #1E2D3D" },
              width: "max-content",
              pt: "15px",
              pb: "15px",
              "&:hover": {
                cursor: "pointer",
              },
              pr: { xs: "20px", lg: "81px" },
            }}
          >
            <Link to="/">m-umer-javed</Link>
          </ListItem>
        </Box>
        <Box sx={{ display: { xs: "none", lg: "flex" }, flexGrow: 1 }}>
          {navItems.map((item) => (
            <Link to={item.link} key={item.key}>
              <ListItem
                sx={{
                  textAlign: "center",
                  borderRight: "1px solid #1E2D3D",
                  width: "140px",
                  pt: "15px",
                  pb: "15px",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#fff",
                  },
                  borderBottom:
                    location.pathname === item.link
                      ? "2px solid #FEA55F"
                      : "none",
                  color: location.pathname === item.link && "#fff",
                }}
              >
                {item.name}
              </ListItem>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", lg: "flex" } }}>
          <Link to="/contact">
            <ListItem
              sx={{
                borderLeft: "1px solid #1E2D3D",
                width: "max-content",
                pt: "15px",
                pb: "15px",
                "&:hover": {
                  cursor: "pointer",
                  color: "#fff",
                },
                borderBottom:
                  location.pathname === "/contact"
                    ? "2px solid #FEA55F"
                    : "none",
                color: location.pathname === "/contact" && "#fff",
              }}
            >
              _contact-me
            </ListItem>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },

            justifyContent: "flex-end",
            flexGrow: 1,
          }}
        >
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "#607B96" }} fontSize="large" />
          </IconButton>
        </Box>
      </Box>
      <SideDrawer toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
    </nav>
  )
}

export default Header
