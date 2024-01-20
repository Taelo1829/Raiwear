import React, { FC } from "react";
import { RouteNameInterface } from "../Interfaces/interfaces";
import { useRouter } from "next/navigation";

const RouteName: FC<RouteNameInterface> = ({
    icon,
    routeName,
    route,
    updateMenu,
    hasDelete,
}) => {
    const navigator = useRouter();
    function navigateTo() {
        navigator.push(route);
        if (updateMenu) updateMenu();
    }
    return (
        <div className="border-b h-12 flex items-center z-10">
            <div className="w-full  flex cursor-pointer" onClick={navigateTo}>
                <div className="flex-1 w-full px-2">
                    <i className={"fa fa-" + icon}></i>
                </div>
                <div className="w-full flex-2 text-center text-xs">{routeName}</div>
            </div>
            {hasDelete && (
                <div className="px-5">
                    <div className="bg-red-500 text-white p-1 rounded-lg cursor-pointer">
                        {" "}
                        DELETE
                    </div>
                </div>
            )}
        </div>
    );
};

export default RouteName;
