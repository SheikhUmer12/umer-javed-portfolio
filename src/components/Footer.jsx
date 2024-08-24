import { Box, IconButton, ListItem } from "@mui/material"
import React from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import GitHubIcon from "@mui/icons-material/GitHub"

const Footer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <footer>
        <Box
          sx={{
            color: "#607B96",
            borderTop: "1px solid #1E2D3D",
            display: "flex",
            background: "#011627",
          }}
        >
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <ListItem
              sx={{
                borderRight: "1px solid #1E2D3D",
                width: "max-content",
                pt: "8px",
                pb: "8px",
              }}
            >
              find-me-on
            </ListItem>
            <ListItem
              sx={{
                borderRight: "1px solid #1E2D3D",
                width: "max-content",
                pt: "0px",
                pb: "0px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/umer-javed-1662a4310/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedInIcon
                    sx={{
                      color: "#607B96",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  />
                </IconButton>
              </a>
            </ListItem>
            <ListItem
              sx={{
                borderRight: "1px solid #1E2D3D",
                width: "max-content",
                pt: "0px",
                pb: "0px",
              }}
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <TwitterIcon
                    sx={{
                      color: "#607B96",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  />
                </IconButton>
              </a>
            </ListItem>
          </Box>
          <Box>
            <ListItem
              sx={{
                borderLeft: { xs: "none", lg: "1px solid #1E2D3D" },
                width: "max-content",
                pt: "0px",
                pb: "0px",
              }}
            >
              <a
                href="https://github.com/ChAqeelZafar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHubIcon
                    sx={{
                      color: "#607B96",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  />
                </IconButton>
              </a>
            </ListItem>
          </Box>
        </Box>
      </footer>
    </Box>
  )
}

export default Footer
