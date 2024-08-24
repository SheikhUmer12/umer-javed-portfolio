import React, { useState } from "react";
import { Box } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { db } from "../firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const InputForm = ({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  setSubmitted,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const variants = {
    hidden: {
      y: 300,
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && message) {
      setSubmitting(true);
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        date: new Date().toLocaleString(),
      });
      setError(false);

      setSubmitting(false);
      setSubmitted(true);
    } else {
      console.log(error);
      setError(true);
      setOpen(true);
    }
  };

  return (
    <Box
      component={motion.div}
      variants={variants}
      initial="hidden"
      animate="visible"
      sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#607B96",
          gap: "10px",
        }}
      >
        <label htmlFor="name">_name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#607B96",
          gap: "10px",
        }}
      >
        <label htmlFor="email">_email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#607B96",
          gap: "10px",
        }}
      >
        <label htmlFor="message">_message:</label>
        <textarea
          type="text"
          name="message"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </Box>
      <Box>
        <button
          onClick={handleSubmit}
          style={{
            background: "#1C2B3A",
            borderRadius: "8px",
            border: "none",
            color: "white",
            fontSize: "14px",
            padding: "10px",
            cursor: "pointer",
          }}
          disabled={submitting}
        >
          submit-message
        </button>
      </Box>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Please Fill All Fields
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default InputForm;
