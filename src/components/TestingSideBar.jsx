import styled from "@emotion/styled";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import data from "./../services/question.json"
import { useState } from "react";


const GridContainer = styled(List)({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 ô trong 1 hàng
    gap: '10px', // Khoảng cách giữa các ô
});





const CustomListQuestionButton = styled(ListItemButton)(({active}) => ({
    width: 100,
    height: 50,
    color: active == "true" ? "#2E3236" : "#FFFFFF",
    fontWeight: "100",
    fontSize: "50",
    backgroundColor: active == "true" ? "#D9D9D9" : "#2E3236",
    border: "solid #D9D9D9",
    borderRadius: "15px",
    textAlign: "center",
    
    "&:hover": {
        backgroundColor: active == "true" ? "#D9D9D9" : "#2E3236",
    }
}))



function TestingSideBar(testid) {

    testid = 1;

    const questions = data.find(t => t.testID == testid).questions;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleItemClick = (index) => {
        setSelectedIndex(index);
    }

    return (
        <Drawer
            anchor="left"
            PaperProps={{
                sx: {
                    backgroundColor: "#2E3236",
                    width: 420,
                    justifyContent: "center",
                    alignItems: "center"
                }
            }}
            variant="permanent"
        >
            
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 400,
                    height: "100%",
                    textAlign: "left",
                    padding: "30px",
                }}
            >
                <h1 style={{color: "#FFFFFF"}}>Testing</h1>
                <h4 style={{color: "#FFFFFF"}}>Thời gian làm bài:</h4>
                <List>
                <GridContainer>
                    { questions.map((item, index) => (
                        <ListItem 
                            disablePadding
                            key={item.questionNo}
                        >

                            <CustomListQuestionButton
                                active={
                                    selectedIndex === index
                                    ? "true"
                                    : "false"
                                }
                                onClick={() => handleItemClick(index)}
                            >
                                <ListItemText
                                    disableTypography
                                    style={{ fontSize: "20px",
                                        fontWeight: "bold" 
                                    }}
                                    primary={item.questionNo}
                                />

                            </CustomListQuestionButton>
                        </ListItem>
                    ))}
                </GridContainer>
                </List>
                <Button
                    className="Submitbtn" 
                    sx={{
                        marginTop: 'auto',
                        backgroundColor: "#005DD6",
                        color: "#FFFFFF",
                        borderRadius: 20,
                        width: "100%",
                        height: 60,
                        borderColor: "#005DD6",
                        textAlign: "center",
                }}>
                    Nộp bài
                </Button>   
            </Box>
        </Drawer>
    );
}

export default TestingSideBar;

