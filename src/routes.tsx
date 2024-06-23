import HomePage from "./views/HomePage";
import Events from "./views/Events";
import { CalendarIcon, StarIcon, IconProps } from "@chakra-ui/icons";
import {ReactNode} from "react";
import { ComponentWithAs } from "@chakra-ui/react";

export interface routeProps {
    name: string,
    icon: ComponentWithAs<"svg", IconProps>,
    destination: string,
    element: ReactNode,
    showInSidebar: boolean
}

export const routes: routeProps[] = [
    {
        name: "HomePage",
        icon: StarIcon,
        destination: "/",
        element: <HomePage />,
        showInSidebar: true
    },
    {
        name: "Events",
        icon: CalendarIcon,
        destination: "/events",
        element: <Events />,
        showInSidebar: true
    }
]