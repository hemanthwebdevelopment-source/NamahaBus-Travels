// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import "./searchlist.css";
// import axios from "axios";
// import { useEffect, useState } from "react"
// export default function Searchlist(){
//   const [buses, setBuses] = useState([]);
//  useEffect(() => {
//    axios.get("http://localhost:3000/buses")
//       .then((res) => {
//         setBuses(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//   }, []);
//     const cards = [
//    {
//     id: 2,
//     title: 'Animals',
//     description: 'Animals are a part of nature.',
//   },
//  ];
//   const [selectedCard, setSelectedCard] = React.useState(0);
//   return (
//     <div class="backgroundimage">
//     <div class="container" >
//     <aside class="sidebar">
//     {/* <img src="adminlogo.png" class="Bharat" alt=""> */}
//     <h2>Admin Panel</h2>
//     <ul>
//        <li onclick="showSection('users')">Manage Users</li>
//       <li><a href="course.html" class="a">Add courses</a></li>
//       <li><a href="timetable.html" class="a">Timetable</a></li>
//       <li ><a href="attendence.html" class="a" id="content-modify">Attendance & Marks</a></li>
//       <li ><a href="notification.html" class="a">Notifications</a></li>
//       <li ><a href="addevents.html" class="a" id="content-modify">Events & Placements</a></li>
//       <li ><a href="feedetails.html" class="a">Fees</a></li>
//       <li > <a href="reports.html" class="a">Reports</a></li>
//       <li > <a href="contentmodification.html" class="a" id="content-modify">Content Moderation</a> </li>
//       <li ><a href="payment.html" class="a">Fees Payment</a></li>
//     <li onclick="logout()" id="content-modify">Logout</li>
//    </ul>
//   </aside>
// <script src="script.js"></script>
// {/* <div> */}
//  <Box
//       sx={{
//         width: '100%',
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
//         gap: 5,
//       }}
//     >
//       {cards.map((card, index) => (
//         <Card key={card.id}>
//           <CardActionArea
//             onClick={() => setSelectedCard(index)}
//             data-active={selectedCard === index ? '' : undefined}
//             sx={{
//               height: '100%',
//               '&[data-active]': {
//                 backgroundColor: 'action.selected',
//                 '&:hover': {
//                   backgroundColor: 'action.selectedHover',
//                 },
//               },
//             }}
//           >
//             <CardContent sx={{ height: '100%' }}>
//                {
//         buses.map((bus, index) => (
//           <div key={index}>
//             console.log(bus);
//             <h3>{bus.busName}</h3>
//             <p>No Of Buses: {bus.noOfBuses}</p>
//             <p>Seats Available: {bus.seatsAvailable}</p>
//           </div>
//         ))
//       }
//                {/* <Typography variant="h5" component="div">
//                 {card.title}
//               </Typography>
//               <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                 {card.description}
//               </Typography>  */}
              
//             </CardContent>
//           </CardActionArea>
//         </Card>
//       ))}</Box>
// </div>
// {/* </div> */}
// </div>
//   )
// }
// import { styled } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';

// import "./searchlist.css";
// import axios from "axios";
// import { useEffect, useState } from "react"
// export default function Searchlist(){
//   const [buses, setBuses] = useState([]);
//  useEffect(() => {
//    axios.get("http://localhost:3000/buses")
//       .then((res) => {
//         setBuses(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//       }, []);
// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   alignItems: 'flex-start',
//   paddingTop: theme.spacing(1),
//   paddingBottom: theme.spacing(2),
//   // Override media queries injected by theme.mixins.toolbar
//   '@media all': {
//     minHeight: 128,
//   },
// }));
// return (
//   <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <StyledToolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
        
//           <Typography
//             variant="h5"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
//           >
//                    {
//          buses.map((bus, index) => (
//            <div key={index}>
//              console.log(bus);            
//               <h3>{bus.busName}</h3>
//              <p>No Of Buses: {bus.noOfBuses}</p>
//              <p>Seats Available: {bus.seatsAvailable}</p>
//            </div>
//          ))
//       }
//           </Typography>
//           <IconButton size="large" aria-label="search" color="inherit">
//             <SearchIcon />
//           </IconButton>
//           <IconButton
//             size="large"
//             aria-label="display more actions"
//             edge="end"
//             color="inherit"
//           >
//             <MoreIcon />
//           </IconButton>
//         </StyledToolbar>
//       </AppBar>

//     </Box>
//  );
// }
import "./BusCard.css";

function BusCard({ bus }) {
    if (!bus) {
    return <h1>Loading...</h1>;
  }
return (
    <div className="card">
      <h2>{bus.busName}</h2>
        <div className="details">
        <p>
          <strong>No Of Buses:</strong> {bus.noOfBuses}
        </p>

        <p>
          <strong>Seats Available:</strong> {bus.seatsAvailable}
        </p>
      </div>

      <button>Book Now</button>
    </div>
  );
}

export default BusCard;