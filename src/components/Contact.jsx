import React, { useState } from "react"
import "./contact.css"
import { Box, Grid, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import EmailIcon from "@mui/icons-material/Email"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import InputForm from "./contantme/InputForm"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

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

  const newMessage = (e) => {
    e.preventDefault()
    setName("")
    setEmail("")
    setMessage("")
    // setName(null);
    // setEmail(null);
    // setMessage(null);
    setSubmitted(false)
  }
  return (
    <Box sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%" }} rowGap={2}>
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
              <Typography variant="body1">contacts</Typography>
            </Box>
            <Box sx={{ p: "10px 2px", borderBottom: "1px solid #1E2D3D" }}>
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
        </Grid>

        {/* ------------------------------------------------------------------------- */}

        <Grid item xs={12} lg={5}>
          <Box
            sx={{
              borderRight: "1px solid #1E2D3D",
              height: "100%",
              p: "20px",
              borderBottom: "1px solid #1E2D3D",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {submitted ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4" sx={{ color: "#fff" }}>
                  Thank you!
                </Typography>
                <Typography variant="body1" sx={{ color: "#607B96" }}>
                  Your message has been accepted. You <br /> will recieve an
                  answer really soon!
                </Typography>
                <Box>
                  <button
                    onClick={newMessage}
                    style={{
                      background: "#1C2B3A",
                      borderRadius: "8px",
                      border: "none",
                      color: "white",
                      fontSize: "14px",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    submit-new-message
                  </button>
                </Box>
              </Box>
            ) : (
              <InputForm
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                message={message}
                setMessage={setMessage}
                setSubmitted={setSubmitted}
              />
            )}
          </Box>
        </Grid>

        {/* ------------------------------------------------------------------------------------------ */}

        <Grid item xs={12} lg={5}>
          <Box sx={{ height: "100%" }}>
            <Typography variant="body1" sx={{ color: "#607B96" }}>
              <SyntaxHighlighter
                language="javascript"
                style={a11yDark}
                wrapLongLines="true"
                customStyle={{ background: "none" }}
                showLineNumbers="true"
                useInlineStyles="false"
              >
                {`
const button = document.querySelector('#sendBtn');

const message = {
	name: "${name}",
	email: "${email}",
	message: "${message}",
	date: "${new Date().toDateString()}"
}

button.addEventListener('click', () => {
	form.send(message);
})
              
              `}
              </SyntaxHighlighter>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Contact
