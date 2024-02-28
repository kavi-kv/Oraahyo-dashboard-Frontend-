import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function Dashboard() {
  console.log("You are in dashboard");
  return (
    <>
    <div className="mt-28 ml-72 mr-36 p-10 h-screen mb-5 flex gap-5 justify-center">
      <Card sx={{ width: 180, height: 150, borderRadius: '20px'}}>
        <CardContent sx={{ mt: '0.7rem' }}>
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1rem",
              fontFamily: "monospace",
              mb: '12px',
            }}
          >
            Total App Users
          </Typography>
          <Typography 
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontFamily: "cursive",
            }}
          >
            12,210
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="medium">Learn More</Button> */}
        </CardActions>
      </Card>
      <Card sx={{ width: 180, height: 150, borderRadius: '20px'}}>
        <CardContent sx={{ mt: '0.7rem' }}>
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1rem",
              fontFamily: "monospace",
              mb: '12px',
            }}
          >
            Daily Logins
          </Typography>
          <Typography 
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontFamily: "cursive",
            }}
          >
            760
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="medium">Learn More</Button> */}
        </CardActions>
      </Card>
      <Card sx={{ width: 180, height: 150, borderRadius: '20px'}}>
        <CardContent sx={{ mt: '0.7rem' }}>
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1rem",
              fontFamily: "monospace",
              mb: '12px',
            }}
          >
            Monthly Users
          </Typography>
          <Typography 
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontFamily: "cursive",
            }}
          >
            5400
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="medium">Learn More</Button> */}
        </CardActions>
      </Card>
      <Card sx={{ width: 180, height: 150, borderRadius: '20px'}}>
        <CardContent sx={{ mt: '0.7rem' }}>
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1rem",
              fontFamily: "monospace",
              mb: '12px',
            }}
          >
            Active Users
          </Typography>
          <Typography 
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontFamily: "cursive",

            }}
          >
            1245
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="medium">Learn More</Button> */}
        </CardActions>
      </Card>
    </div>
    </>
  );
}

export default Dashboard;
