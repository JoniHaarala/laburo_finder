import React from "react"
import { ThemeContext } from "./dm/themeContext"
import Skeleton from '@mui/material/Skeleton';

export const Loader = () => {
    let bgcolor
    const { theme } = React.useContext(ThemeContext);
    theme === 'dark' ? bgcolor = 'grey.800' : bgcolor = 'grey.400'
    return (
        <section className="p-3 w-full">
            <Skeleton variant="rounded" height={160} sx={{ width: '100%', bgcolor, my: 3, borderRadius:'7px' }} />
            <Skeleton variant="rounded" height={160} sx={{ width: '100%', bgcolor, my: 3, borderRadius:'7px' }} />
            <Skeleton variant="rounded" height={160} sx={{ width: '100%', bgcolor, my: 3, borderRadius:'7px' }} />
            <Skeleton variant="rounded" height={160} sx={{ width: '100%', bgcolor, my: 3, borderRadius:'7px' }} />
        </section>
    )
}
