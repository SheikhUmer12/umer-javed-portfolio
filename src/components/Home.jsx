import React, { useEffect, useRef } from "react"
import { Box, Grid, Typography } from "@mui/material"
import Typed from "typed.js"
import { motion } from "framer-motion"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import GameBoard from "./Game/GameBoard"

const Home = () => {
  const variants = {
    hidden: {
      x: -300,
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
      },
    },
  }
  const Gamevariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "linear",
      },
    },
  }

  const el = useRef(null)

  const typed = useRef(null)

  useEffect(() => {
    const options = {
      strings: [
        "Full-stack developer",
        "Back-end developer",
        "Front-end developer",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
    }

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options)

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy()
    }
  }, [])

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignItems: "center",
              position: "realtive",
              height: "100%",
              p: { xs: "0px 10px", lg: "0px" },
            }}
          >
            <Box
              sx={{
                display: { xs: "block", lg: "none" },
                position: "absolute",
                zIndex: "0",
              }}
            >
              <img src="Green.png" alt="" />
            </Box>
            <Box
              sx={{
                display: { xs: "block", lg: "none" },
                position: "absolute",
                zIndex: "0",
              }}
            >
              <img src="Blue.png" alt="" />
            </Box>
            <Box sx={{ zIndex: "10" }}>
              <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                Hi all. I am
              </Typography>
              <Typography
                variant="h3"
                sx={{ color: "#fff" }}
                component={motion.div}
                variants={variants}
                initial="hidden"
                animate="visible"
              >
                M Umer
              </Typography>
              <Box sx={{ display: "flex", gap: "5px", zIndex: "10" }}>
                <Typography
                  variant="h6"
                  sx={{ color: { xs: "#43D9AD", lg: "#43D9AD" } }}
                >
                  {" "}
                  &#62;
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: { xs: "#43D9AD", lg: "#43D9AD" } }}
                  ref={el}
                ></Typography>
              </Box>
              <Box sx={{ mt: "80px", zIndex: "10" }}>
                <Typography
                  variant="body1"
                  sx={{ color: "#607B96" }}
                  gutterBottom
                >
                  &#47;&#47; find me on Github
                </Typography>
                <Typography variant="body1" sx={{ color: "#607B96" }}>
                  <SyntaxHighlighter
                    language="javascript"
                    style={a11yDark}
                    wrapLongLines="true"
                    customStyle={{ background: "none", color: "#607B96" }}
                  >
                    {'const githubLink = "github.com/SheikhUmer12" '}
                  </SyntaxHighlighter>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ display: { xs: "none", lg: "block" } }}>
          <Box
            component={motion.div}
            variants={Gamevariants}
            initial="hidden"
            animate="visible"
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GameBoard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
