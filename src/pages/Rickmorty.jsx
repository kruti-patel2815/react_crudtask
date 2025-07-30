import React from "react";
import Grid from "@mui/material/Grid";
import img1 from "../img/123.jpeg";
import img2 from "../img/204.jpeg";
import img3 from "../img/265.jpeg";
import img4 from "../img/398.jpeg";
import img5 from "../img/43.jpeg";
import img6 from "../img/792.jpeg";
import Box from "@mui/material/Box";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "@mui/material/Link";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AppBar from "@mui/material/AppBar";
import logo from "../img/b6740400-92d4-11ea-8a13-d5f6e0558e9b.png";
import Typography from '@mui/material/Typography';

const Rickmorty = () => {
  const data = [
    {
      img: img1,
      name: "Fat Morty",
      alive: " Alive - Human",
      location: " Citadel of Ricks",
      seen: " The Ricklantis Mixup",
    },
    {
      img: img2,
      name: "Lisa",
      alive: " Dead - Human",
      location: " Immortality Field Resort",
      seen: " The Whirly Dirly Conspiracy",
    },
    {
      img: img3,
      name: "Pickle Rick",
      alive: " Alive - Human",
      location: " Earth (Replacement Dimension)",
      seen: " Pickle Rick",
    },
    {
      img: img4,
      name: "Accountant Dog",
      alive: " Alive - Human",
      location: "Snuffles' Dream",
      seen: " Lawnmower Dog",
    },
    {
      img: img5,
      name: "Big Morty",
      alive: " Dead - Human",
      location: " Citadel of Ricks",
      seen: " The Ricklantis Mixup",
    },
    {
      img: img6,
      name: "Alien Crow",
      alive: " Dead - Human",
      location: " Avian Planet",
      seen: " Forgetting Sarick Mortshall",
    },
  ];
  const pages = ["Docs","About"]
  return (
    <div>
      {/* header section start */}
      <Box className="header">
        <Box className="logo">
          <img src={logo}></img>
        </Box>
        <Box className="navbar">
          {pages.map((page) => (
            <Typography className='pages'>{page}</Typography>
          ))}
          <button>SUPPORT US</button>
        </Box>
      </Box>
      {/* header section end */}
      <h1 className="top">The Rick and Morty API</h1>
      <p className="bottom">
        <Grid container spacing={2}>
          {data.map((i, index) => (
            <Grid size={6}>
              <Box className="box">
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <img
                      src={i.img}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                      alt={i.name}
                    />
                  </Grid>
                  <Grid size={6}>
                    <Box className="right">
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Link
                          href="#"
                          sx={{
                            fontSize: "27px",
                            fontFamily:
                              " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                            color: "white",
                            fontWeight: "bold",
                            textDecoration: "none",
                            "&:hover": {
                              color: " rgb(255, 152, 0)",
                            },
                          }}
                        >
                          {i.name}
                        </Link>

                        <span style={{ display: "flex", color: "white" }}>
                          <CircleIcon
                            sx={{ color: "green", fontSize: "14px" }}
                          ></CircleIcon>{" "}
                          {i.alive}
                        </span>
                        <br />
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ color: "grey" }}>
                          Last known location:
                        </span>

                        <Link
                          href="#"
                          sx={{
                            fontSize: "18px",
                            fontFamily:
                              " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                            color: "white",
                            fontWeight: "bold",
                            textDecoration: "none",
                            "&:hover": {
                              color: " rgb(255, 152, 0)",
                            },
                          }}
                        >
                          {i.location}
                        </Link>
                        <br />
                      </Box>
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ color: "grey" }}>First seen in:</span>

                        <Link
                          href="#"
                          sx={{
                            fontSize: "18px",
                            fontFamily:
                              " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                            color: "white",
                            fontWeight: "bold",
                            textDecoration: "none",
                            "&:hover": {
                              color: " rgb(255, 152, 0)",
                            },
                          }}
                        >
                          {i.seen}
                        </Link>
                        <br />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          ))}
        </Grid>
      </p>
      {/* footer section start */}

      <Box className="footer">
        <Box sx={{ display: "flex" }}>
          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontFamily:
                " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: " rgb(255, 152, 0)",
              },
            }}
          >
            {"CHARACTERS: 826"}
          </Link>

          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontFamily:
                " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: " rgb(255, 152, 0)",
              },
              ml: "20px",
            }}
          >
            {"LOCATIONS: 126"}
          </Link>

          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontFamily:
                " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: " rgb(255, 152, 0)",
              },
              ml: "20px",
            }}
          >
            {"EPISODES: 51"}
          </Link>
        </Box>
        <br />

        <Box>
          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontFamily:
                " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: " rgb(255, 152, 0)",
              },
            }}
          >
            {"SERVER STATUS"}
          </Link>{" "}
          <CircleIcon sx={{ color: "green", fontSize: "14px" }}></CircleIcon>
        </Box>
        <br />
        <Box sx={{ display: "flex" }}>
          <SelectAllOutlinedIcon
            sx={{ fontSize: "45px" }}
          ></SelectAllOutlinedIcon>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "12px" }}>deploy by</span>
            <span style={{ fontSize: "22px" }}>Netlify</span>
          </Box>

          <TokenOutlinedIcon
            sx={{ fontSize: "45px", ml: "20px" }}
          ></TokenOutlinedIcon>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "12px" }}>Powered by</span>
            <span style={{ fontSize: "22px" }}>Stellate</span>
          </Box>
        </Box>
        <br />

        <Box>
          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontFamily:
                " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: " rgb(255, 152, 0)",
              },
            }}
          >
            <GitHubIcon sx={{ mr: "20px", fontSize: "16px" }}></GitHubIcon>
          </Link>

          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontFamily:
                " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: " rgb(255, 152, 0)",
              },
            }}
          >
            <TwitterIcon sx={{ mr: "20px", fontSize: "16px" }}></TwitterIcon>
          </Link>

          <Link
            href="#"
            sx={{
              fontSize: "16px",
              fontFamily:
                " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": {
                color: " rgb(255, 152, 0)",
              },
            }}
          >
            <FavoriteIcon sx={{ fontSize: "16px" }}></FavoriteIcon>
          </Link>
        </Box>

        <br />

        <Box>
          <span>
            ❮❯ by
            <Link
              href="#"
              sx={{
                fontSize: "16px",
                fontFamily:
                  " -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                "&:hover": {
                  color: " rgb(255, 152, 0)",
                },
              }}
            >
              {"Axel Fuhrmann"}
            </Link>
            2025
          </span>
        </Box>
      </Box>

      {/* footer section end */}
    </div>
  );
};

export default Rickmorty;
