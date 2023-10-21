import React, { useState } from 'react';
import { Button, Container, Form, Grid, Segment } from 'semantic-ui-react';
import UserService from '../services/UserService';
import { useNavigate } from 'react-router-dom';



export default function UserAdd() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const userService = new UserService();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userService.addUser({ first_name: firstName, last_name: lastName, email });
            console.log(response);
            navigate('/');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}> Kullanıcı Ekle</h1>
            <Grid centered>
                <Grid.Column width={6}>
                    <Segment>
                        <Form className="create-form" onSubmit={handleSubmit}>
                            <Form.Field>
                                <label>Adı</label>
                                <input
                                    placeholder='Adı'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Soyadı</label>
                                <input
                                    placeholder='Soyadı'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>E-posta</label>
                                <input
                                    placeholder='E-posta'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Field>
                            <Button type='submit' primary>Ekle</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

        </div>

    );
}
