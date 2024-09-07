import styled from "@emotion/styled";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  {
    display: "Trang chủ",
    icon: <HomeOutlinedIcon style={{ fontSize: "24px" }} />,
    to: "/home",
    section: "home",
  },
  {
    display: "Bài kiểm tra của tôi",
    icon: <QuizOutlinedIcon style={{ fontSize: "24px" }} />,
    to: "/my-exams",
    section: "my-exams",
  },
  {
    display: "Lịch sử kiểm tra",
    icon: <HistoryOutlinedIcon style={{ fontSize: "24px" }} />,
    to: "/history",
    section: "history",
  },
  {
    display: "Bảng xếp hạng",
    icon: <StarBorderOutlinedIcon style={{ fontSize: "24px" }} />,
    to: "/ranking",
    section: "ranking",
  },
];

const CustomListItemButton = styled(ListItemButton)(({ active }) => ({
  width: "100%",
  color: active == "true" ? "white" : "black",
  fontWeight: "500",
  fontSize: "100px",
  backgroundColor: active == "true" ? "#005DD6" : "white",
  margin: "0 50px 0 40px",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: active == "true" ? "#005DD6" : "#ebebeb6c",
  },
}));

const CustomListItemIcon = styled(ListItemIcon)(({ active }) => ({
  color: active == "true" ? "white" : "black",
}));

function SideBar() {
  let currentSection = location.pathname.replace("/", "");
  if (currentSection === "") {
    currentSection = "home";
  }
  return (
    <Drawer
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: "white",
          width: 350,
          position: "relative",
        },
      }}
      variant="permanent"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          textAlign: "center",
        }}
      >
        <List>
          {sidebarItems.map((item, index) => (
            <NavLink
              key={`nav-bar-${index}`}
              style={{ textDecoration: "none" }}
              to={item.to}
            >
              <ListItem
                disablePadding
                key={item.section}
                style={{
                  marginTop: "15px",
                }}
              >
                <CustomListItemButton
                  active={
                    currentSection === sidebarItems[index]?.section
                      ? "true"
                      : "false"
                  }
                >
                  <CustomListItemIcon
                    active={
                      currentSection === sidebarItems[index]?.section
                        ? "true"
                        : "false"
                    }
                  >
                    {item.icon}
                  </CustomListItemIcon>
                  <ListItemText
                    disableTypography
                    style={{ fontSize: "16px" }}
                    primary={item.display}
                  />
                </CustomListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default SideBar;
