import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
    const [hats, setHats] = useState(null);

    const API_URL = '';

    const getHats = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setHats(data);
        } catch (error) {
            // TODO: Add a task we wish to perform in the event of an error
        }
    };

    const createHat = async (hat) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                },
                body: JSON.stringify(hat),
            });
            getHats();
        } catch (error) {
            // TODO: Add a task we wish to perform in the event of an error
        }
    };

    const updatePeople = async (hat, id) => {
        await fetch(API_URL + '/' + hat._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'Application/json',
          },
          body: JSON.stringify(hat),
        });
        // update list of people
        getHats();
    };

    const deletePeople = async (id) => {
        await fetch(API_URL + '/' + id, {
        method: 'DELETE',
        });
        getHats();
    };

    useEffect(() => {
        getHats();
    }, []);

    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<Index hats={hats} createHat={createHat} />}
                />
                <Route path="/hats/:id" element={<Show hats={hats} updatePeople={updatePeople} deletePeople={deletePeople}/>} />
            </Routes>
        </main>
    );
}

export default Main;