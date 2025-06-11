import {MenuBar} from "./components/MenuBar";
import { Outlet } from "react-router-dom";


export function Layout() {
    return (
        <>
            <MenuBar />
            <main>
                <Outlet/>
            </main>
        </>
    )
}