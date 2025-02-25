import React, { useEffect, useState} from 'react';
import AddressCard from "../componenets/AddressCard"
import Nav from "../componenets/nav"

const default function Profile(){
  const[personalDetails,setPersonalDetails]=useState({
    name;"";
    email:"";
    phoneNumber:"";
    avatarUrl:"";
  });

  const [addresss,setAddresses]=useState([]);

  useEffect(()=>{
  fetch(
    `http://localhost:8000/api/v2/user/profile?email=${"d@gmail.com"}`,
    {
      method: "GET",
      headers:{
        "content-Type": "application/json",

      },
    }
  )  
  .then((res)=>{
    if(!res.ok){
      throw new Error(`HTTP error! status: ${res.status}`);

    }
    return res.json();
  })
  .then((data)=>{
    setPersonalDetails(data.user);
    setAdsresses(data.addresses);
    console.log("User fetched")
  })
}
}