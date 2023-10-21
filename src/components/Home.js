import React, { useEffect, useState } from 'react'
import { Button, Container, Grid } from 'semantic-ui-react'
import UserService from '../services/UserService';
import { Table } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import AddUserButton from './AddUserButton';
import SearchUserButton from './SearchUserButton';

export default function Home() {
    const [users, setUsers] = useState([]);
    let userService = new UserService();
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getUsers()
            .then((response) => {
                setUsers(response.data);
                setFilteredUsers(response.data);
            })
    }, [])

    const handleSearch = (searchTerm) => {
        const filteredResults = users.filter((user) => {
            const lowerCaseFirstName = user.first_name.toLowerCase();
            const lowerCaseSearchTerm = searchTerm.toLowerCase();

            return lowerCaseFirstName.startsWith(lowerCaseSearchTerm);
        });

        setFilteredUsers(filteredResults);
    };

    return (
        <Container style={{ marginTop: '20px' }}>
            <h1 style={{ textAlign: 'center' }}> CRUD Uygulaması</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <AddUserButton />
                <SearchUserButton onSearch={handleSearch} />
            </div>



            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>E-posta</Table.HeaderCell>
                        <Table.HeaderCell>İşlemler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {filteredUsers.map((user) => (
                        <Table.Row key={user.id}>
                            <Table.Cell>{user.id}</Table.Cell>
                            <Table.Cell>{user.first_name}</Table.Cell>
                            <Table.Cell>{user.last_name}</Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell textAlign="center">
                                <Button.Group>
                                    <Button as={Link} to={`/update/${user.id}`} primary>
                                         Güncelle
                                    </Button>
                                    <Button.Or />
                                    <Button as={Link} to={`/delete/${user.id}`} negative>
                                        Sil
                                    </Button>
                                </Button.Group>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>

    )
}


