import React, { useEffect, useState } from "react";
import { Grid, Box, Typography, Link, CircularProgress } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SelectAllOutlinedIcon from "@mui/icons-material/SelectAllOutlined";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../img/b6740400-92d4-11ea-8a13-d5f6e0558e9b.png";
import axios from "axios";

const Rickandmortyapi = () => {
  const [characters, setCharacters] = useState([]);
  const [counts, setCounts] = useState({
    characters: 0,
    locations: 0,
    episodes: 0,
  });
  const [loading, setLoading] = useState(true);
  const pages = ["Docs", "About"];

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [charRes, locRes, epiRes] = await Promise.all([
          axios.get("https://rickandmortyapi.com/api/character"),
          axios.get("https://rickandmortyapi.com/api/location"),
          axios.get("https://rickandmortyapi.com/api/episode"),
        ]);

        // Fetch episode names for first episodes of each character
        const characterList = charRes.data.results;
        const episodeUrls = characterList.map((char) => char.episode[0]);
        const uniqueEpisodeUrls = [...new Set(episodeUrls)];

        const episodeData = await Promise.all(
          uniqueEpisodeUrls.map((url) => axios.get(url))
        );

        const episodeMap = {};
        episodeData.forEach((ep) => {
          episodeMap[ep.data.url] = ep.data.name;
        });

        const charactersWithEpisodeName = characterList.map((char) => ({
          ...char,
          firstEpisodeName: episodeMap[char.episode[0]],
        }));

        setCharacters(charactersWithEpisodeName);
        setCounts({
          characters: charRes.data.info.count,
          locations: locRes.data.info.count,
          episodes: epiRes.data.info.count,
        });
        setLoading(false);
      } catch (err) {
        console.error("API error:", err);
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      {/* Header */}
      <Box className="header">
        <Box className="logo">
          <img src={logo} alt="logo" />
        </Box>
        <Box className="navbar">
          {pages.map((page) => (
            <Typography key={page} className="pages">
              {page}
            </Typography>
          ))}
          <button>SUPPORT US</button>
        </Box>
      </Box>

      <h1 className="top" style={{ fontSize: "100px" }}>
        The Rick and Morty API
      </h1>

      {/* Cards */}
      <Box p={4} sx={{ backgroundColor: "rgb(32, 35, 41)" }}>
        <Grid container spacing={2}>
          {characters.map((char) => (
            <Grid size={6} key={char.id}>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#2e2e2e",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: 3,
                  height: "280px", // fixed height
                  width: "100%",
                  minWidth: "350px",
                }}
              >
                {/* Image */}
                <Box sx={{ width: "40%", height: "100%" }}>
                  <img
                    src={char.image}
                    alt={char.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Info */}
                <Box sx={{ width: "60%", padding: 2 }}>
                  <Typography
                    component={Link}
                    href={`https://rickandmortyapi.com/api/character/${char.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "white",
                      textDecoration: "none",
                      "&:hover": { color: "orange" },
                    }}
                  >
                    {char.name}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      mt: 1,
                    }}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: "14px",
                        color: char.status === "Alive" ? "green" : "red",
                        mr: 1,
                      }}
                    />
                    {char.status} - {char.species}
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ color: "grey" }}>
                      Last known location:
                    </Typography>
                    <Link
                      href={char.location.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      {char.location.name}
                    </Link>
                  </Box>

                  <Box sx={{ mt: 2 }}>
                    <Typography sx={{ color: "grey" }}>
                      First seen in:
                    </Typography>
                    <Link
                      href={char.episode[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: "white",
                        fontWeight: "bold",
                        textDecoration: "none",
                      }}
                    >
                      {char.firstEpisodeName}
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        className="footer"
        sx={{ padding: 4, color: "white", backgroundColor: "#1c1c1c" }}
      >
        <Box sx={{ display: "flex" }}>
          <Link href="#" sx={{ color: "white", fontWeight: "bold", mr: 3 }}>
            CHARACTERS: {counts.characters}
          </Link>
          <Link href="#" sx={{ color: "white", fontWeight: "bold", mr: 3 }}>
            LOCATIONS: {counts.locations}
          </Link>
          <Link href="#" sx={{ color: "white", fontWeight: "bold" }}>
            EPISODES: {counts.episodes}
          </Link>
        </Box>

        <br />

        <Box>
          <Link href="#" sx={{ color: "white", fontWeight: "bold" }}>
            SERVER STATUS
          </Link>{" "}
          <CircleIcon sx={{ color: "green", fontSize: "14px" }} />
        </Box>

        <br />

        <Box sx={{ display: "flex" }}>
          <SelectAllOutlinedIcon sx={{ fontSize: 45 }} />
          <Box ml={1}>
            <Typography variant="caption">deploy by</Typography>
            <Typography>Netlify</Typography>
          </Box>
          <TokenOutlinedIcon sx={{ fontSize: 45, ml: 4 }} />
          <Box ml={1}>
            <Typography variant="caption">Powered by</Typography>
            <Typography>Stellate</Typography>
          </Box>
        </Box>

        <br />

        <Box>
          <GitHubIcon sx={{ mr: 2, color: "white" }} />
          <TwitterIcon sx={{ mr: 2, color: "white" }} />
          <FavoriteIcon sx={{ color: "white" }} />
        </Box>

        <br />

        <Box>
          <span>
            ❮❯ by{" "}
            <Link href="#" sx={{ color: "white", fontWeight: "bold" }}>
              Axel Fuhrmann
            </Link>{" "}
            2025
          </span>
        </Box>
      </Box>
    </div>
  );
};

export default Rickandmortyapi;
