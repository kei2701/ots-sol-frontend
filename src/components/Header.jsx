import { Box, CardMedia, Stack, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import banner from "./../assets/OTS_banner_blue.png";
import VietnamIcon from "./../assets/vietnam.png";
import CustomTextField from "./CustomTextField";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CustomButton from "./CustomButton";

const CustomLogo = styled(CardMedia)(() => ({
  backgroundSize: "contain",
  backgroundColor: "#FFFFFF",
  cursor: "pointer",
}));

const HeaderContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  height: 125,
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  top: 0,
  position: "sticky",
  zIndex: 10000,
}));

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderContainer direction={"row"}>
        <CustomLogo
          onClick={() => navigate("/")}
          image={banner}
          sx={{
            width: 300,
            height: 100,
          }}
        />
        <CustomTextField
          backgroundColor="#EDEDED"
          placeHolderColor="#989898"
          width="600px"
          border="0px"
          borderRadius="10px"
          startIcon={<SearchIcon style={{ color: "#989898" }} />}
          placeholder={"Tìm kiếm bài kiểm tra"}
        />
        <CustomButton
          variant="contained"
          width="150px"
          height="50px"
          fontSize="18px"
          backgroundColor="#005DD6"
          borderRadius="10px"
          fontWeight="600"
        >
          Nhập mã
        </CustomButton>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={"200px"}
        >
          <NotificationsNoneIcon style={{ fontSize: "32px" }} />
          <Box component="img" src={VietnamIcon} alt="VietnamIcon" />
          <Box
            border={"1px solid #4998FF"}
            borderRadius={"24px"}
            width={"48px"}
            height={"48px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography fontWeight={"600"} color="#005DD6">
              AN
            </Typography>
          </Box>
        </Stack>
      </HeaderContainer>
    </>
  );
}

export default Header;
