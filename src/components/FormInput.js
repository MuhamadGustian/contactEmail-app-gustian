import React from 'react';
import { Button, TextField, Box } from '@mui/material';

const FormInput = ({ add }) => {
    const [task, setTask] = React.useState("");

    const handleChange = (event) => {
        setTask(event.target.value);
    }

    const handleAdd = () => {
        add(task);
        setTask("");
    }

    return (
        <Box className="input-container">
            <TextField
                id="task-input"
                label="Tambahkan Email"
                variant="outlined"
                value={task}
                onChange={handleChange}
                fullWidth
            />
            <Button variant="contained" color="primary" className="btn" onClick={handleAdd}>
                Tambahkan
            </Button>
        </Box>
    );
}

export default FormInput;
