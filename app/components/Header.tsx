"use client";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Image from "../components/Image";
// import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { getUserDetails } from "../helper/helper";
import { useRouter, usePathname } from "next/navigation";
import { getMessages } from "../api/database";

const Header = () => {
  const User = getUserDetails();
  let admin =
    User?.email === "01ombie@gmail.com" ||
    User?.email === "tseholoba2@gmail.com";
    const pathName = usePathname();
    const [hidden, setHidden] = useState("hidden");
    const [width, setWidth] = useState("w-0");
    const [cartCount, setCartCount] = useState(0);
    const [searchHidden, setHideSearch] = useState(false);
    const [notificationHidden, setHideNotification] = useState(true);
    const [messages, setMessages]: any[] = useState([]);
    
  useEffect(() => {
    updateCartCount();
    getMessagesFromDB();
  }, [messages]);
function updateCartCount() {
    setInterval(() => {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    }, 1000);
  }
  function openMenu() {
    setHidden("");
    setTimeout(() => setWidth("w-2/4"), 1);
  }

  function closeMenu() {
    setWidth("w-0");
    setTimeout(() => setHidden("hidden"), 700);
  }

  function updateMenu() {
    switch (hidden) {
      case "hidden":
        openMenu();
        break;
      default:
        closeMenu();
        break;
    }
  }

  function handleNotificationVisibility() {
    setHideNotification(!notificationHidden);
  }

  async function checkForNewMessage() {
    let response = await getMessages();
    let unreadMessage: any[] = response.filter((message: any) => !message.read);
    setMessages(unreadMessage);
  }

  function getMessagesFromDB() {
    let intervalTime = 60000 * 5;
    checkForNewMessage();
    setInterval(() => {
      checkForNewMessage();
    }, 6000);
  }

  function renderMessageRows() {
    if (messages.length) {
      return messages.map((message: any) => {
        return (
          <Link
            href={{
              pathname: "/message",
              query: { id: message.id },
            }}
            key={message.id}
            className="font-light text-2x text-center border-b"
          >
            Message From {message.firstName} {message.lastName}
            {" - "}
            {message.dateAdded}
          </Link>
        );
      });
    } else {
      return (
        <div className="font-light text-2x text-center border-b">
          There are no notifications
        </div>
      );
    }
  }

  return (
    <div className={" relative " + (pathName === "/shopping" ? "pt-10" : "")}>
      <div className="hidden md:flex  flex-col  items-center fixed w-screen pb-5 md:max-h-52 transition duration-300 ease-in-out  border-b border-1 border-orange-custom z-10 bg-white ">
        <div className="container pt-5 ">
          <div className="md:flex justify-between items-center">
            <div
              className=" flex-1 px-5 md:inline-block cursor-pointer"
              data-modal-target="modal"
            >
              <Link href={"/collection"}>
                <i className="fa fa-bars text-2xl md:text-4xl "></i>
              </Link>
            </div>
            <Link className="flex-1 flex justify-center" href={"/"}>
              <div
                className="w-96 md:w-64 h-20 bg-cover bg-center"
                style={{ backgroundImage: `url(/img/4.png)` }}
              ></div>
            </Link>

            <div className="flex-1 px-5">
              <div className="float-end">
                {pathName === "/shopping" ? (
                  <Link href={"/contact-us"}>help</Link>
                ) : (
                  ""
                )}
                {!User && pathName !== "/login" ? (
                  <Link href={"login"}>log in &nbsp;</Link>
                ) : User ? (
                  <Link href={"/user"} className="mx-2">
                    {User.displayName}
                  </Link>
                ) : (
                  ""
                )}
                <Link href={"shopping"}>Shopping Bag({cartCount}) &nbsp;</Link>
                <span className="relative cursor-pointer">
                  <i
                    className="fa fa-bell"
                    onMouseEnter={handleNotificationVisibility}
                  ></i>
                  {messages.length ? (
                    <div className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-red-500"></div>
                  ) : (
                    ""
                  )}
                  <div onMouseLeave={handleNotificationVisibility}>
                    <div
                      className={
                        "absolute bg-white w-96 min-h-12 border border-1 z-20 " +
                        (notificationHidden ? "hidden" : "")
                      }
                    >
                      <div className="font-semibold text-2x text-center border-b">
                        NOTIFICATIONS
                      </div>
                      {renderMessageRows()}
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="flex justify-center my-2">
              <Link
                href={"/collection"}
                className="hover:underline mx-5 font-mono"
              >
                collection
              </Link>
              <Link
                href={"/about-us"}
                className="hover:underline mx-5 font-mono"
              >
                about us
              </Link>
              <Link
                href={"/contact-us"}
                className="hover:underline mx-5 font-mono"
              >
                contact us
              </Link>
              <Link href={"/blog"} className="hover:underline mx-5 font-mono">
                blog
              </Link>
              {User ? (
                <Link
                  href={"/admin"}
                  className="hover:underline mx-5 font-mono"
                >
                  admin
                </Link>
              ) : (
                <> </>
              )}
            </div>
            <div className="absolute right-20">
              <i
                className="fa fa-search"
                onClick={() => setHideSearch(!searchHidden)}
              ></i>
            </div>
          </div>
          <div
            className={`transition duration-300 ease-in-out ${
              searchHidden ? "h-full" : "h-0"
            } overflow-hidden `}
          >
            <Search />
          </div>
          <Menu toggleMenu={updateMenu} hidden={hidden} width={width} />
        </div>
      </div>
      <div className="block md:hidden fixed md:relative  w-screen bg-white z-10">
        <div className="flex md:hidden justify-between items-center p-3">
          <Link href={"/"}>
            <Image image="/img/4.png" height="h-16" borderless />
          </Link>
          <div>
            <Link href={"shopping"}>Shopping Bag({cartCount}) &nbsp;</Link>
          </div>
        </div>
        <div className="flex justify-center border border-gray-100 py-2">
          <input placeholder="search" className="text-center border border-1 border-gray-400 h-10 w-72 rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
