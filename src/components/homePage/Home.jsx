import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import style from "./home.module.css";
import LadingPage from "../ladingPage/LadingPage";
import About from "../about/About";
import Skills from "../skills/Skills";
import Contact from "../Contact/Contact";

const drawerWidth = 240;

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KOK
      </Typography>
      <Divider />
      <List>
        <div className={style.lateralItems}>
          <a className={style.items} href="#">
            Home
          </a>
          <a className={style.items} href="#about">
            About
          </a>
          <a className={style.items} href="#skills">
            Skill
          </a>
          <a className={style.items} href="#contact">
            Contact
          </a>
        </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CssBaseline />
      <Toolbar>
        <AppBar style={{ backgroundColor: "#ffffff" }} component="nav">
          <div className={style.navBar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
              style={{ backgroundColor: "#989898" }}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <Typography
                color="GrayText"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                KOK
              </Typography>
            </div>

            <div className={style.eachItem}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <a className={style.items} href="#">
                  Home
                </a>
                <a className={style.items} href="#about">
                  About
                </a>
                <a className={style.items} href="#skills">
                  Skill
                </a>
                <a className={style.items} href="#contact">
                  Contact
                </a>
              </Box>
            </div>
          </div>
        </AppBar>
      </Toolbar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {/* <Toolbar /> */}
        <div className={style.sections}>
          <div>
            <section id="#">
              <LadingPage />
            </section>
          </div>

          <section id="about">
            <About />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
