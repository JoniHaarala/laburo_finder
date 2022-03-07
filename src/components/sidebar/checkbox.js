import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function SidebarCheckbox() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        
    };
    checked === true 
    ? console.log('ischeked','full time') 
    : console.log('isNotcheked','partial time') ;

    return (
        <FormControlLabel className="my-5"
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }} />}
            label="Full Time" />
    );
}