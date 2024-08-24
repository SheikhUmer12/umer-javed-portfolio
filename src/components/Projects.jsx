import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsList = [
    {
      title: "Qunions",
      des: "A mobile application which facilitates opinion trading and beyond. It’s a Questions and Opinions platform, where there are only opinions to questions – no factual single correct answer! Be the most popular or most unique in your opinion to win.",
      img: "/projectImages/ProjectCover_Qunions.png",
      link: "https://qunions.com/",
    },
    {
      title: "Kinetic Thinking",
      des: "Kinetic Thinking is the capacity of a manager to move intentionally among different ways of thinking based on the stage and circumstances of their challenges. Kinetic moves can attune managers to marketplace dynamics, open up their perception to new opportunities, and expands their range of actions.",
      img: "/projectImages/ProjectCover_KineticTinking.png",
      link: "https://mykineticstyle.com/",
    },
    {
      title: "Odin Luxury",
      des: "Odin Luxury is an ecommerce site that sells luxury items, including jewelry, watches, handbags, and clothing. Odin Luxury offers a curated selection of the finest luxury items, and it ships worldwide. Odin Luxury is the perfect place to find the perfect luxury item.",
      img: "projectImages/ProjectCover_odin.png",
      link: "https://odinluxury.com/",
    },
    {
      title: "Everyday Fresh Farm",
      des: "Everyday Freshfarm is an ecommerce site that sells fresh vegetables. Everyday Freshfarm offers a wide variety of fresh vegetables, and it ships nationwide. Everyday Freshfarm is the best way to buy fresh vegetables in the UK.",
      img: "projectImages/ProjectCover_EFF.png",
      link: "https://office.everydayfreshfood.com/",
    },
    {
      title: "THPORTH",
      des: "Unleash the excitement of sports with our dynamic platform! Enjoy a user-friendly website, a sleek mobile app, and stay in the game with real-time scores. Our admin panel ensures hassle-free access to league schedules and online streaming channels. Elevate your sports-watching experience with THPORTH – where passion meets technology.",
      img: "projectImages/ProjectCover_THPORTH.png",
      link: "http://13.214.104.151/",
    },
    {
      title: "Warehouse Management System",
      des: "Enhance your warehouse efficiency with our streamlined solution. Our WMS offers real-time inventory control, efficient order processing, and optimized logistics management. Elevate your warehouse performance effortlessly.",
      img: "projectImages/ProjectCover_WMS.png",
      link: "http://178.16.139.131/",
    },
  ];

  // @ Config for animations
  const variants = {
    hidden: {
      opacity: 0,
      translateX: -100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        p: "20px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {projectsList.map((item, i) => (
        <Box
          key={item.title}
          component={motion.div}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: i * 0.1, type: "spring" }}
          viewport={{ once: true }}
        >
          <Typography variant="body1" sx={{ color: "#5565E8" }} gutterBottom>
            {item.title}
          </Typography>
          <Card
            sx={{
              minWidth: 400,
              maxWidth: 400,
              border: "2px solid #1E2D3D",
              height: 400,
              display: "flex",
              flexFlow: "column",
              background: "#011221",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={item.img}
              alt="green iguana"
            />
            <CardContent sx={{ flex: "1 1 auto" }}>
              <Typography variant="body2">{item.des}</Typography>
            </CardContent>
            <CardActions sx={{ p: "0px 20px 20px" }}>
              <a
                href={item.link}
                target="_black"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  padding: "10px",
                  background: "#1C2B3A",
                  borderRadius: "8px",
                }}
              >
                view-project
              </a>
            </CardActions>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
