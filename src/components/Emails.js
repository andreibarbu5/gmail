import React from "react";
import Email from "../components/Email";

const Emails = () => {
  const emails = [
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
    {
      expeditor: "Designmodo",
      messageTitle: "Holiday Special!",
      message: "North Woods Audio and Sound LLC 10% Off Products",
      timestamp: "11:00 AM",
    },
    {
      expeditor: "Codepen",
      messageTitle: "Lorem!",
      message: "Lorem ipsum dolor sit amet consectetur adipisicing",
      timestamp: "9:00 AM ",
    },
    {
      expeditor: "Corporate",
      messageTitle: "Codepen!",
      message: "Amet adipisci praesentium, id soluta ea sit rerum vero",
      timestamp: "Dec 3",
    },
    {
      expeditor: "Brother",
      messageTitle: "Lorem!",
      message: "Vero odio architecto aperiam voluptatum deleniti magnam",
      timestamp: "Dec 2",
    },
  ];
  return (
    <div className=" ">
      {emails.map((email) => (
        <Email
          expeditor={email.expeditor}
          messageTitle={email.messageTitle}
          message={email.message}
          timestamp={email.timestamp}
        />
      ))}
    </div>
  );
};

export default Emails;
