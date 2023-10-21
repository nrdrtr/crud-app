import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';

export default function SearchUserButton({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
                placeholder="Ara..."
                style={{ marginRight: '10px' }}
                value={searchTerm}
                onChange={handleInputChange}
            />
            <Button primary onClick={handleSearch}>Ara</Button>
        </div>
    );
}
