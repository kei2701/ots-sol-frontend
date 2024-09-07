import { CardMedia, MenuItem, Stack, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "./../assets/OTS_2.png";
import XIcon from "@mui/icons-material/X";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const CustomLogo = styled(CardMedia)(() => ({
  backgroundSize: "contain",
  backgroundColor: "#0077FF",
  cursor: "pointer",
}));

const HeaderContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  height: 125,
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  padding: "14px 22px",
  fontWeight: "600",
  fontSize: "18px",
}));

const MenuItemContainer = styled(Stack)(() => ({
  width: "450px",
  alignItems: "center",
  justifyContent: "space-between",
}));

function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer direction={"row"}>
        <Stack width={300} alignItems={"center"}>
          <CustomLogo
            onClick={() => navigate("/")}
            image={logo}
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <Typography fontWeight={"600"} color="#0077FF">
            Online Training System
          </Typography>
        </Stack>
        <MenuItemContainer direction={"row"}>
          <CustomMenuItem>Trang chủ</CustomMenuItem>
          <CustomMenuItem>Giới thiệu</CustomMenuItem>
          <CustomMenuItem>Liên hệ</CustomMenuItem>
        </MenuItemContainer>
        <Stack width={"550px"} alignItems={"flex-end"} spacing={1}>
          <Stack direction={"row"} spacing={4}>
            <XIcon />
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </Stack>
          <Typography fontWeight={500}>
            © 2024 Online Training System. All rights reserved.
          </Typography>
        </Stack>
      </HeaderContainer>
    </>
  );
}

export default Footer;
