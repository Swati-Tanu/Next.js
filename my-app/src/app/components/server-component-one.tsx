import fs from "fs"
import { ServerComponentTwo } from "../components/server-component-two"
import { ClientComponentOne } from "../components/client-component-one"

export const ServerComponentOne = () => {
    // fs.readFileSync("scr/app/components/server-component-one.tsx", "utf-8")
    return (
    <>
        <h1>Server component One!</h1>
        <ServerComponentTwo/>
        <ClientComponentOne/>
    </>
    )
}

