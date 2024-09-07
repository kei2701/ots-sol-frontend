import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Box, styled } from "@mui/material";

const LayoutContainer = styled(Box)({
  display: "flex",
});

function UserLayout() {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Sidebar />
        <Outlet />
      </LayoutContainer>
      <Footer />
    </>
  );
}

export default UserLayout;
