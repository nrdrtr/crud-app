import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function AddUserButton() {
    return (
        <Link to="/add" style={{ marginRight: '10px' }}>
            <Button primary>
                Kullanıcı Ekle
            </Button>
        </Link>
    );
}
