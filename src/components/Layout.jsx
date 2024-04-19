import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItems } from "./elements/Sidebar";
import Header from "./elements/Header";
import { FaRegUser } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineTimeline } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

import { useEffect } from "react";
import axios from "axios";

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.user.userDetail);

  console.log("user", user);

  console.log(location.pathname);

  const redux = useSelector((state) => state);
  console.log("redux", redux);

  const menuData = [
    {
      label: "My profile",
      link: "/dashboard",
    },
    {
      label: "Settings",
      link: "/settings",
    },
    {
      label: "Help",
      link: "/help",
    },
  ];
  return (
    <Flex>
      <Sidebar>
        {user?.isDoctor ? (
          <>
            <Link to="/dashboard">
              <SidebarItems
                icon={<MdOutlineDashboard size={20} />}
                text={"Dashboard"}
                alert={false}
                active={location.pathname === "/dashboard"}
              />
            </Link>
            <Link to="/patients">
              <SidebarItems
                icon={<FaRegUser size={20} />}
                text={"Patient"}
                alert={false}
                active={location.pathname === "/patients"}
              />
            </Link>
            <Link to="/scan">
              <SidebarItems
                icon={<FaMagnifyingGlass size={20} />}
                text={"Scan"}
                alert={false}
                active={location.pathname === "/scan"}
              />
            </Link>
            <Link to="/settings">
              <SidebarItems
                icon={<IoSettingsOutline size={20} />}
                text={"Settings"}
                alert={false}
                active={location.pathname === "/settings"}
              />
            </Link>
            <Link to="/help">
              <SidebarItems
                icon={<BsQuestionSquare size={20} />}
                text={"Help"}
                alert={false}
                active={location.pathname === "/help"}
              />
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">
              <SidebarItems
                icon={<MdOutlineDashboard size={20} />}
                text={"Dashboard"}
                alert={false}
                active={location.pathname === "/dashboard"}
              />
            </Link>

            <Link to="/patient/consult">
              <SidebarItems
                icon={<FaUserDoctor size={20} />}
                text={"Consult"}
                alert={false}
                active={location.pathname === "/patient/consult"}
              />
            </Link>
            <Link to="/patient/timeline">
              <SidebarItems
                icon={<MdOutlineTimeline size={20} />}
                text={"Your Timeline"}
                alert={false}
                active={location.pathname === "/patient/timeline"}
              />
            </Link>
            <Link to="/scan">
              <SidebarItems
                icon={<FaMagnifyingGlass size={20} />}
                text={"Scan"}
                alert={false}
                active={location.pathname === "/scan"}
              />
            </Link>

            <Link to="/help">
              <SidebarItems
                icon={<BsQuestionSquare size={20} />}
                text={"Help"}
                alert={false}
                active={location.pathname === "/help"}
              />
            </Link>
          </>
        )}
      </Sidebar>
      <Box display={"flex"} flexDirection={"column"} w="100%">
        {user?.isDoctor ? <></> : <Header menuData={menuData} />}
        <Box flex="1" p="4">
          {/* Main content goes here */}
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
