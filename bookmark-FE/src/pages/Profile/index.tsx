import { Box, Avatar, Menu, MenuItem, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../libs/api";

export const Profile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const _hostUrl = "http://localhost:3000"
    const [journeyById, setJourneyById] = useState<any>([]);

    const getJourneyByuserId = async ( ) => {
        const res = await API.get("/journey",{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });
        console.log(res)
    };

    useEffect(() => {
        getJourneyByuserId();
    })
    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigate = useNavigate();

    return (
        <Box display={"flex"} height={"100vh"}>
            <Box flex={1}>
                <Box height={"85px"} width={"100%"} sx={{ backgroundColor: "#F1F1F1", display: "flex", alignItems: "center", justifyContent: "space-between", px: "50px" }}>
                    <Box>
                        <img src="src/assets/icon.png" alt="" />
                    </Box>
                    
                    <Avatar onClick={handleClick} src="src/assets/Alive.jpg" style={{ cursor: "pointer", marginLeft: "10px" }} />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
                        <MenuItem onClick={() => navigate("/bookmark")}>Bookmark</MenuItem>
                        <MenuItem onClick={() => navigate("/login")}>Logout</MenuItem>
                        <MenuItem onClick={() => navigate("/my-journey")}>My Journey</MenuItem>
                    </Menu>
                </Box>

                <Box>
                    <Typography variant="h4">Profile</Typography>
                </Box>
                <Box width={"100%"} height={"510px"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Box sx={{width:"35%", height:"400px",}}>

                    <img src="src/assets/Alive.jpg" style={{borderRadius:"50%"}} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", m: 5, flexWrap: "wrap" }}>
          
            </Box>
        </Box>
        </Box>
    );
};
