import React from 'react';
import FormInput from './components/FormInput';
import TugasItem from './components/TugasItem';
import EditModal from './components/EditModal';
import Header from './components/Header';
import logo from './assets/Logo.jpg';
import { Container, Typography, Box } from '@mui/material';
import './App.css';

class App extends React.Component {
    state = {
        username: "MuhamadGustian", 
        tugass: [],
        isEdit: false,
        editData: {
            id: "",
            title: ""
        }
    }

    setTitle = e => {
        this.setState({
            editData: {
                ...this.state.editData,
                title: e.target.value
            }
        })
    }

    openModal = (id, data) => {
        this.setState({
            isEdit: true,
            editData: {
                id,
                title: data
            }
        })
    }

    closeModal = () => {
        this.setState({
            isEdit: false
        })
    }

    update = () => {
        const { id, title } = this.state.editData;
        const newData = { id, title };
        const newTugass = this.state.tugass;
        newTugass.splice((id - 1), 1, newData);
        this.setState({
            tugass: newTugass,
            isEdit: false,
            editData: {
                id: "",
                title: ""
            }
        })
    }

    deleteTask = (id) => {
        this.setState({
            tugass: this.state.tugass.filter(item => item.id !== id)
        })
    }

    addTask = (data) => {
        const id = this.state.tugass.length;
        const newData = {
            id: id + 1,
            title: data
        }
        this.setState({
            tugass: [...this.state.tugass, newData]
        })
    }

    render() {
        const { username, tugass } = this.state;
        return (
            <Container maxWidth="sm" className="app">
    <Header username={username} />
    <Box className="logo" textAlign="center" marginY={5}>
        <img src={logo} alt="logo" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px' }} />
        <Typography variant="h5" component="h3" color="primary" sx={{ marginTop: 2 }}>
            Muhamad Gustian Hendrayana
        </Typography>
    </Box>

    <Box className="input-form" marginBottom={3}>
        <FormInput add={this.addTask} />
    </Box>
    <EditModal
        edit={this.state.isEdit}
        close={this.closeModal}
        change={this.setTitle}
        data={this.state.editData}
        update={this.update}
    />

    <Box className="list" marginBottom={3}>
        {tugass.map(item => (
            <TugasItem
                key={item.id}
                tugas={item}
                del={this.deleteTask}
                open={this.openModal}
            />
        ))}
    </Box>
</Container>

        );
    }
}

export default App;
 