import React, {useState} from "react";
import logo from "./../assets/OTS_banner_blue.png";
import CustomTextField from "./../components/CustomTextField";
import loginbanner from "./../assets/login.jpg"
import VietnamIcon from "./../assets/vietnam.png";
import {
    Box,
    Button,
    CardContent,
} from "@mui/material";

function LoginPage() {
    return (
        <Box
            display={"flex"}
            flexDirection={"row"}
        >
            <Box
                component="img"
                src={loginbanner}
                alt="loginbanner"
                sx={{
                    width: "60%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "18px"
                }}
            />
            <CardContent
                sx={{
                    alignItems: "center",
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px"
                }}
            >
                    <h4 style={{ fontWeight:"normal", alignItems: "center", marginLeft: "auto"}}>
                        Bạn không có tài khoản?
                        <a href="/register">Đăng kí ngay! <Box component="img" alt="VietnamIcon" src={VietnamIcon} sx={{marginLeft: "20px"}}/>
                        </a>
                    </h4>
        
                <Box component="img" src={logo} sx={{width: "600px", objectFit: "cover", paddingLeft: "120px", marginTop: "120px"}}/>
                
                <h4 style={{fontWeight: "normal"}}> Vui lòng nhập thông tin người dùng </h4>

                <CardContent
                    sx={{
                        alignItems: "center",
                        width: "300px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                    }}
                >
                    <CustomTextField
                        backgroundColor="#E9E9E9"
                        placeHolderColor="#989898"
                        width="300px"
                        border="1.0px solid black"
                        borderRadius="18px"
                        placeholder={"Tên đăng nhập"}
                    />
                    <CustomTextField
                        backgroundColor="#E9E9E9"
                        placeHolderColor="#989898"
                        width="300px"
                        border="1.0px solid black"
                        borderRadius="18px"
                        placeholder={"Nhập mật khẩu"}
                    />
                    <a href="/forgot-password-user" 
                        style={{
                            textAlign: "right",
                            fontSize: 16,
                            marginLeft: "auto"
                        }}
                    >
                        Quên mật khẩu?
                    </a>

                    <Button
                        className="Loginbtn"
                        sx={{
                            marginTop: 'auto',
                            backgroundColor: "#005DD6",
                            color: "#FFFFFF",
                            borderRadius: 18,
                            width: "300px",
                            height: 60,
                            borderColor: "#005DD6",
                            textAlign: "center",
                        }}
                    >
                        Đăng nhập
                    </Button>
                </CardContent>
            </CardContent>
        </Box>
    );
}

export default LoginPage;