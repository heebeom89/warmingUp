import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // 데이터 가져오기
    const fetchData = async () => {
        const response = await axios.get('http://localhost:5000/api/items');
        setData(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // 데이터 추가하기
    const addItem = async () => {
        if (inputValue) {
            const response = await axios.post('http://localhost:5000/api/items', { name: inputValue });
            setData([...data, response.data]);
            setInputValue('');
        }
    };

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add an item"
            />
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default Home;