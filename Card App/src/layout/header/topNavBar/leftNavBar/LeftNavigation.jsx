import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import { getUser } from "../../../../users/services/localStorageService";

export default function LeftNavigation() {
  const user = getUser();
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <NavItem to={ROUTES.CARDS} label="Cards" />
      <NavItem to={ROUTES.ABOUT} label="About" />
      <NavItem to={"payment"} label="Donate" />
      {user && user.isBusiness && (
        <NavItem to={ROUTES.MY_CARDS} label="my cards" />
      )}
      {user && <NavItem to={ROUTES.FAV_CARDS} label="favorite cards" />}
    </Box>
  );
}
