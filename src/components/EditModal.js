import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const EditModal = ({ edit, close, change, data, update }) => {
    return (
        <Modal
            open={edit}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit Email
                </Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    label="email"
                    value={data.title}
                    onChange={change}
                />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button onClick={update} variant="contained" color="primary" sx={{ mr: 1 }}>
                        Simpan
                    </Button>
                    <Button onClick={close} variant="outlined" color="secondary">
                        Batalkan
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default EditModal;
