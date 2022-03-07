import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function SidebarRadioButtons() {
    const [value, setValue] = React.useState('all');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="my-8">
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value="USA" control={<Radio />} label="USA" />
                    <FormControlLabel value="Europa" control={<Radio />} label="Europa" />
                    <FormControlLabel value="America" control={<Radio />} label="America" />
                    <FormControlLabel value="Asia" control={<Radio />} label="Asia" />
                </RadioGroup>
            </FormControl>
        </div>

    );
}