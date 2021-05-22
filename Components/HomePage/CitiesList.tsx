import React from "react";
import MenuListComposition from "./CitiesDropDown";
// import styled from 'styled-components'
// import {Div} from '../styles/NavBarCities'
import styles from '../styles/Cities.module.scss'
export default function CitiesList() {

  // const Div= styled.nav`
  // display:flex;
  // text-align:center;
  // margin: 2px solid #414141;
  // background-color: #eeeeee;
  // width: 100%;
  // justify-content:space-evenly;
  // `

  const AllCities = [
    {
      title: "Bangalore",
      options: [
        "Koramangala",
        "Majestic",
        "Kempegowda international Airport",
        "Marathahalli",
        "Indiranagar",
        "Whitefield",
        "Hsr Layout",
        "Madiwala",
        "Hebbal",
        "Kr Puram",
        "All of Bangalore",
      ],
    },
    {
      title: "Chennai",
      options: [
        "Mount Road",
        "Chennai Central Railway Station",
        "Ecr East Coast Road",
        "T Nagar",
        "Anna Nagar",
        "Chennai International Airport",
        "Porur",
        "Vadapalani",
        "Koyambedu",
        "Velachery",
      ],
    },
    {
      title: "Delhi",
      options: [
        "Mahipalpur",
        "New Delhi Railway Station",
        "Karol Bagh",
        "Paharganj",
        "Indira Gandhi International Airport",
        "Dwarka, New Delhi",
        "Dwarka Sector 9",
        "Laxmi Nagar",
        "Rohini",
        "Lajpat Nagar",
      ],
    },
    {
        title:"Gurgaon",
        options:[
            "Huda City Center Metro",
            "Gurgaon Bus Stand",
            "Sector 14",
            "DLF Phase 3",
            "Mg Road",
            "Sector 38",
            "Medanta Hospital",
            "Gurgaon Sohna Road",
            "Iffco Chowk",
            "Sikanderpur"
        ]
    },
    {
      title:"Hyderabad",
      options:[
        "Secunderabad  Railway Station",
        "Madhapur",
        "Ameerpet",
        "Gachibowli",
        "LB Nagar",
        "Kukatpally",
        "Kondapur",
        "Begumpet",
        "Hitech City",
        "Nampally"
      ]
    },
    {
      title:"Kolkata",
      options:[
        "Howrah Railway Station",
        "New Town",
        "Salt Lake City",
        "Kolkata International Airport",
        "Park Street",
        "Sealdah Railway Station",
        "Dum Dum",
        "Esplanade Metro Station",
        "Park Circus",
        "Sector 5 Salt Lake City"
      ]
    },
    {
      title:"Mumbai",
      options:[
        "Andheri East",
        "Thane",
        "Andheri West",
        "Vashi",
        "Panvel",
        "Saki Naka",
        "Dadar",
        "Bandra",
        "Malad West",
        "Kurla"
      ]
    },
    {
      title:"Noida",
      options:[
        "Sector 62",
        "Sector 18",
        "Pari Chowk",
        "Greater Noida",
        "Sector 15",
        "Noida City Centre",
        "Sector 63",
        "Sector 66",
        "Gaziabad",
        "Sector 51"
      ]
    }
  ];
  return <div className={styles.Div}>
    {AllCities.map((item)=> <MenuListComposition {...item}></MenuListComposition>)}
  </div>;
}
