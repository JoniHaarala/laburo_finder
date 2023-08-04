import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { ThemeContext } from './dm/themeContext';

export const InfoLoader = () => {
    let bgcolor;
    const { theme } = React.useContext(ThemeContext);
    theme === 'dark' ? bgcolor = 'grey.800' : bgcolor = 'grey.400'
    return (
        <section className="text-blue-900 dark:text-blue-200 lg:flex lg:gap-10 w-full">
            <aside className="lg:max-w-xs w-full">
                <div className="my-7">
                    <Skeleton animation="wave" width={150} sx={{ bgcolor }} />
                </div>
                <div>
                    <div className="my-3">
                        <Skeleton animation="wave" width={150} sx={{ bgcolor }} />
                    </div>
                    <Skeleton animation="wave" sx={{ bgcolor, width: {lg: '320px', xs: '100%'} }} />
                    <Skeleton animation="wave" sx={{ bgcolor, width: {lg: '320px', xs: '100%'} }} />
                    <Skeleton animation="wave" sx={{ bgcolor, width: {lg: '320px', xs: '100%'} }} />
                    <Skeleton animation="wave" sx={{ bgcolor, width: {lg: '320px', xs: '100%'} }} />
                </div>
            </aside>

            <section className='w-full'>
                <div className="my-10">
                    <Skeleton variant="text" width={250} sx={{ fontSize: '2rem', bgcolor }} />
                    <Skeleton variant="text" width={80} sx={{ bgcolor, my: 2 }} />
                    <Skeleton variant="text" width={150} sx={{ bgcolor }} />
                </div>
                <div className='my-10 flex gap-3'>
                    <Skeleton
                        sx={{ bgcolor }}
                        variant="rectangular"
                        width={80}
                        height={80}
                    />
                    <div className="space-y-6">
                        <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor }} width={100} />
                        <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor }} width={50} />
                    </div>
                </div>
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '100%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '80%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '100%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '80%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '100%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '80%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '100%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '80%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '100%', my: 2 }} />
                <Skeleton animation="wave" height={30} sx={{ bgcolor, width: '80%', my: 2 }} />
            </section>
        </section>
    )
}
