import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
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


const CustomListAnswersButton = styled(ListItemButton)(({}) => ({
    width: 100,
    height: 50,
    color: "black",
    fontWeight: "100",
    fontSize: "50",
    backgroundColor: "#D9D9D9",
    border: "1.5px solid #2E3236",
    borderRadius: "15px",
    textAlign: "left",
}))

const CustomPointerAnswer = styled(Card)(({active}) => ({

    width: '20px',
    height: '20px',
    borderRadius: '50%',
    border: '1.5px solid black',
    backgroundColor: active === "true" ? '#005DD6' : '#D9D9D9',
    marginRight: '10px',
    cursor: "pointer"
}))

function TextAnswer({index}) {
    switch(index) {
        case 0:
            return "A";
        case 1:
            return "B";
        case 2:
            return "C";
        case 3:
            return "D";

        default: return "";
    }
}

function TestingLayout(testid) {

    testid = 1;

    const questions = data.find(t => t.testID == testid).questions;

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleAnswerClick = (index) => {
        setSelectedIndex(index);
    }

    return (
            <List>
                { questions.map((item, index) => (
                    <CardContent
                        sx={{
                            marginLeft: "auto",
                            marginRight: "30px",
                            marginTop: "50px",
                            padding: "30px 40px",
                            width: "75%",
                            borderRadius: 15,
                            backgroundColor: "#D9D9D9",
                            textAlign: "left",
                            color: "black",
                            fontSize: 26,
                            fontWeight: "bold"
                        }}
                        key={item.detail}
                    >
                        <h4>Câu {index+1}: {item.detail}</h4>

                        { item.answers.map((answer, index) => (
                            <ListItem
                                key={item.questionNo}
                            >
                            
                            <CustomListAnswersButton
                                active={
                                    selectedIndex === index
                                    ? "true"
                                    : "false"
                                }
                                onClick={() => handleAnswerClick(index)}
                            >
                                <CustomPointerAnswer
                                    active={
                                        selectedIndex === index
                                        ? "true"
                                        : "false"
                                    }
                                    onClick={() => handleAnswerClick(index)}
                                />
                                <ListItemText
                                    disableTypography
                                    style={{ 
                                        fontFamily: "Inter",
                                        fontSize: "18px",
                                        fontWeight: "regular"
                                    }}
                                    primary={`${TextAnswer({index})}. ${answer}`}
                                />                            
                            </CustomListAnswersButton>
                        </ListItem>
                        ))}
                        
                    </CardContent>
                ))}
            </List>  
    );
}

export default TestingLayout;

