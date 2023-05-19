import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
import {
  menuStyle,
  closeButtonStyle,
  headingStyle,
  listStyle,
  itemStyle,
  iconStyle,
} from "../constants/constants";

const HamburgerMenu = ({ onClose, sideMenu }) => {
  return (
    <div style={menuStyle}>
      <AiOutlineClose onClick={onClose} size={30} style={closeButtonStyle} />
      <h2 style={headingStyle}>
        <span style={{ fontWeight: "bold" }}>NHL</span> Teams
      </h2>
      <nav>
        <ul style={listStyle}>
          <li style={itemStyle}>
            <TbTruckDelivery size={25} style={iconStyle} />
            Orders
          </li>
          <li style={itemStyle}>
            <MdFavorite size={25} style={iconStyle} />
            Favorites
          </li>
          <li style={itemStyle}>
            <FaWallet size={25} style={iconStyle} />
            Wallet
          </li>
          <li style={itemStyle}>
            <MdHelp size={25} style={iconStyle} />
            Help
          </li>
          <li style={itemStyle}>Promotions</li>
          <li style={itemStyle}>
            <BsFillSaveFill size={25} style={iconStyle} />
            Best Ones
          </li>
          <li style={itemStyle}>
            <FaUserFriends size={25} style={iconStyle} />
            Invite Friends
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
