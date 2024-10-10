import React from "react";
import logo from "./../assets/OTS_banner_blue.png";
import CustomTextField from "../components/CustomTextField";
import loginbanner from "./../assets/login.jpg"
import VietnamIcon from "./../assets/vietnam.png";
import {
    Box,
    Button,
    CardContent,
} from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function RegisterPage() {

    return(
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
                    borderRadius: "16px",
                    backgroundColor: "#E7F2FF"
                }}
            >
                    <h4 style={{ fontWeight:"normal", alignItems: "center", marginLeft: "auto"}}>
                        Bạn đã có tài khoản?
                        <a href="/register">Đăng nhập ngay! <Box component="img" alt="VietnamIcon" src={VietnamIcon} sx={{marginLeft: "20px"}}/>
                        </a>
                    </h4>
        
                <Box component="img" src={logo} sx={{width: "600px", objectFit: "cover", paddingLeft: "120px", display: "flex", alignItems: "center", justifyContent: "center"}}/>
                
                <h4 style={{fontWeight: "normal"}}> Vui lòng nhập mật khẩu mới </h4>

                <CardContent
                    sx={{
                        alignItems: "center",
                        width: "360px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    }}
                >
                    <CustomTextField
                        backgroundColor="#E9E9E9"
                        placeHolderColor="#989898"
                        width="360px"
                        border="1.0px solid black"
                        borderRadius="18px"
                        placeholder={"Nhập mật khẩu"}
                        startIcon={<LockPersonIcon style={{color: "#000000"}}/>}
                        endIcon={<RemoveRedEyeIcon style={{color: "#000000"}}/>}
                    />
                    <CustomTextField
                        backgroundColor="#E9E9E9"
                        placeHolderColor="#989898"
                        width="360px"
                        border="1.0px solid black"
                        borderRadius="18px"
                        placeholder={"Nhập lại mật khẩu"}
                        startIcon={<LockPersonIcon style={{color: "#000000"}}/>}
                        endIcon={<RemoveRedEyeIcon style={{color: "#000000"}}/>}
                    />

                    <Button
                        className="Registerbtn"
                        sx={{
                            marginTop: 'auto',
                            backgroundColor: "#005DD6",
                            color: "#FFFFFF",
                            borderRadius: 18,
                            width: "360px",
                            height: 60,
                            borderColor: "#005DD6",
                            textAlign: "center",
                        }}
                    >
                        Xác nhận đổi mật khẩu
                    </Button>
                </CardContent>
            </CardContent>
        </Box>
    )
}

export default RegisterPage;