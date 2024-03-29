import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function SidebarRadioButtons({ setCountry }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        setCountry(event.target.value)
    };

    return (
        <div className="my-8 dark:text-slate-200">
            <FormControl>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel value='' control={<Radio className='dark:text-slate-200' />} label="worldwide" />
                    <FormControlLabel value="USA" control={<Radio className='dark:text-slate-200' />} label="USA" />
                    <FormControlLabel value="Europe" control={<Radio className='dark:text-slate-200' />} label="Europe" />
                    <FormControlLabel value="America" control={<Radio className='dark:text-slate-200' />} label="America" />
                    <FormControlLabel value="Asia" control={<Radio className='dark:text-slate-200' />} label="Asia" />
                </RadioGroup>
            </FormControl>
        </div>

    );
}