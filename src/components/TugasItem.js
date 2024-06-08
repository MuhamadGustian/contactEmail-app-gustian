import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const TugasItem = ({ tugas, del, open }) => {
    return (
        <Card className="task-card" variant="outlined">
            <CardContent>
                <Typography variant="body1">{tugas.title}</Typography>
            </CardContent>
            <CardContent className="task-actions">
                <IconButton
                    onClick={() => open(tugas.id, tugas.title)}
                    aria-label="edit"
                    color="primary" // Menyesuaikan warna dengan tombol "Tambahkan"
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    onClick={() => del(tugas.id)}
                    aria-label="delete"
                    color="secondary"
                    style={{ color: 'red' }} // Menyesuaikan warna ikon delete menjadi merah
                  
                >
                    <DeleteIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
}

export default TugasItem;
