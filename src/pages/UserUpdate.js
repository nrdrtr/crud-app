import React, { useState, useEffect } from 'react';
import { Button, Form, Container, Grid, Segment } from 'semantic-ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

export default function UserUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: '', last_name: '', email: '' });
  const userService = new UserService();

  useEffect(() => {

    const getUser = async () => {
      try {
        const { data } = await userService.getUserById(id);
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    getUser();
  }
    , [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.updateUser(id, user);
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Kullanıcı Güncelle</h1>

      <Grid centered>
        <Grid.Column width={6}><Segment>
          <Form className="update-form" onSubmit={handleSubmit}>
            <Form.Field>
              <label>Adı</label>
              <input
                placeholder='First Name'
                value={user.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>Soyadı</label>
              <input
                placeholder='Last Name'
                value={user.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>E-posta</label>
              <input
                placeholder='Email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Field>
            <br />
            <Button type='submit' primary >Güncelle</Button>
          </Form>
        </Segment>
        </Grid.Column>
      </Grid>

    </div>
  );
}
