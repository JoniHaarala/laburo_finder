import React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CardPagination(data, val) {
    
    return (
        <Stack className="my-10 items-end" spacing={2}>
            <Pagination
                color='primary'
                variant="outlined"
                shape="rounded"
                count={123}
            />
        </Stack>
    );
}