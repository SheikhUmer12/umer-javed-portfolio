import React, { useState } from "react"
import { Box, Grid, Typography } from "@mui/material"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import DetailSection from "./about/DetailSection"
import CodeSnippets from "./about/CodeSnippets"
import { motion } from "framer-motion"

const infoItems = [
  {
    id: 0,
    name: "bio",
    img: "folder-1.png",
    detail: `I am a software engineer specializing in React, React Native, and Android Native. My expertise extends to implementing robust and scalable solutions using Firebase and AWS. With a strong background in both web and mobile application development, I have honed my skills in creating efficient, user-friendly applications.`,
  },
  {
    id: 1,
    name: "skills",
    img: "folder-2.png",
    detail: [
      {
        name: "React / Next.js / Remix.js",
        icon: "logos/react.svg",
      },
      {
        name: "React Native",
        icon: "logos/react.svg",
      },
      {
        name: "Node.js",
        icon: "logos/nodejs.svg",
      },
      {
        name: "Firebase",
        icon: "logos/firebase.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "logos/tailwind.svg",
      },
      {
        name: "Material UI",
        icon: "logos/mui.svg",
      },

      {
        name: "Framer Motion",
        icon: "logos/framer-motion.svg",
      },
      {
        name: "JavaScript",
        icon: "logos/javascript.svg",
      },
      {
        name: "TypeScript",
        icon: "logos/typescript.svg",
      },
      {
        name: "Android",
        icon: "logos/android.png",
      },
      {
        name: "AWS",
        icon: "logos/amazon.png",
      },
    ],
  },
  {
    id: 2,
    name: "interset",
    img: "folder-3.png",
    detail:
      "I have a keen interest in staying at the forefront of technology, constantly seeking to learn and adapt to emerging trends. My passion lies in exploring advanced technologies and integrating them into my work. This enthusiasm for innovation drives me to continuously expand my skill set, ensuring that I am always equipped to meet the challenges of the evolving tech landscape. Whether it's delving into new programming languages, frameworks, or tools, I am committed to embracing change and harnessing it to deliver exceptional results.",
  },
]

const About = () => {
  const [selected, setSelected] = useState(infoItems[0])
  const variants = {
    hidden: {
      x: -300,
    },
    visible: {
      x: 0,
      transition: {
        ease: "linear",
      },
    },
  }

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid xs={12} lg={2}>
          <Box
            component={motion.div}
            variants={variants}
            initial="hidden"
            animate="visible"
            sx={{
              borderRight: "1px solid #1E2D3D",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#fff",
                borderBottom: "1px solid #1E2D3D",
                p: "10px 2px",
              }}
            >
              <ArrowDropDownIcon />
              <Typography variant="body1">personal-info</Typography>
            </Box>
            <Box sx={{ p: "10px 2px", borderBottom: "1px solid #1E2D3D" }}>
              {infoItems.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#607B96",
                    gap: "8px",
                    mb: "8px",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => setSelected(infoItems[item.id])}
                >
                  <ArrowForwardIosIcon fontSize="10px" />
                  <img src={item.img} alt="" />
                  <Typography
                    variant="body2"
                    sx={{ color: selected.id === item.id ? "#fff" : "" }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#fff",
                  borderBottom: "1px solid #1E2D3D",
                  p: "10px 2px",
                }}
              >
                <ArrowDropDownIcon />
                <Typography variant="body1">contacts</Typography>
              </Box>
              <Box sx={{ p: "10px 2px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#607B96",
                    gap: "8px",
                    mb: "8px",
                  }}
                >
                  <EmailIcon fontSize="small" />
                  <a href="mailto:maqeelzafar19@gmail.com">
                    <Typography variant="caption">
                      umerjaved3333@gmail.com
                    </Typography>
                  </a>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#607B96",
                    gap: "8px",
                    mb: "8px",
                  }}
                >
                  <LocalPhoneIcon fontSize="small" />

                  <Typography variant="caption">03225522460</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* -------------------------------------details--------------------------------------------------------- */}

        <Grid item xs={12} lg={5}>
          <Box sx={{ borderRight: "1px solid #1E2D3D", height: "100%" }}>
            <DetailSection selected={selected} />
          </Box>
        </Grid>

        {/* -----------------------------------code Snippets------------------------------------------------------- */}

        <Grid item xs={12} lg={5}>
          <Box sx={{ height: "100%" }}>
            <CodeSnippets />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
