import React from "react";
import {
  PATH_AGENTS,
  PATH_CUSTOMERS,
  PATH_DASHBOARD,
  PATH_HOTJAR,
  PATH_ORDERS,
  PATH_PERFORMANCE,
  PATH_PRODUCTS,
  PATH_REPORTS,
  PATH_SETTINGS,
  PATH_TICKETS,
} from "../../constants/urls";
import SingleOption from "./SingleOption";
import { BiHome } from "react-icons/bi";
import { GrDocumentPerformance } from "react-icons/gr";
import { GiTicket } from "react-icons/gi";
import { SiHotjar } from "react-icons/si";
import { CiUser } from "react-icons/ci";
import { AiOutlineFolder, AiOutlineSetting } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import CreateNewButton from "./CreateNewButton";
import LogOutButton from "./LogOutButton";

const SideMenu = (props) => {
  return (
    <>
      <div
        className={`${
          props.hamburgerOpen ? "left-0" : "-left-72"
        } fixed top-14 w-64 z-[1000] duration-300 max-w-full overflow-x-hidden bg-[#f7f7f7]`}
      >
        {/* hotel owner sidebar options */}
        <div className="relative w-full flex flex-col py-4 select-none duration-200 overflow-y-auto h-[calc(100vh-3.5rem)] sidebar-scroll overflow-x-hidden px-4 justify-between">
          <div>
            <CreateNewButton/>
            <SingleOption
              link={PATH_DASHBOARD}
              Icon={BiHome}
              name="dashboard"
            />
            <div className="text-[#33333379] font-semibold uppercase px-3 my-3">
              Analytics
            </div>
            <SingleOption
              link={PATH_PERFORMANCE}
              Icon={GrDocumentPerformance}
              name="performance"
            />
            <SingleOption link={PATH_HOTJAR} Icon={SiHotjar} name="hotjar" />{" "}
            <div className="text-[#33333379] font-semibold uppercase px-3 my-3">
              support
            </div>
            <SingleOption link={PATH_TICKETS} Icon={GiTicket} name="tickets" />
            <SingleOption link={PATH_AGENTS} Icon={CiUser} name="agents" />
            <SingleOption
              link={PATH_CUSTOMERS}
              Icon={BsPeople}
              name="customers"
            />
            <div className="text-[#33333379] font-semibold uppercase px-3 my-3">
              shop
            </div>
            <SingleOption
              link={PATH_PRODUCTS}
              Icon={AiOutlineFolder}
              name="products"
            />
            <SingleOption
              link={PATH_ORDERS}
              Icon={IoIosNotificationsOutline}
              name="orders"
            />
            <SingleOption
              link={PATH_REPORTS}
              Icon={TbReportSearch}
              name="reports"
            />
          </div>
          <div>
            <SingleOption
              link={PATH_SETTINGS}
              Icon={AiOutlineSetting}
              name="settings"
            />
            <LogOutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
