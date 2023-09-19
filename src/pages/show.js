// importing the useNavigate hook
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Show(props) {
  // set up nav function with the useNavigate hook
  const navigate = useNavigate();
  const { id } = useParams();
  const hats = props.hats;
  const hat = hats ? hats.find((h) => h._id === id) : null;

  const [editForm, setEditForm] = useState({
    name: "",
    title: "",
    image: ""
  });

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value
    })
  )};

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePeople(editForm);
  };

  const handleDelete = () => {
    props.deletePeople(hat._id);
    navigate('/');
  };

  const loaded = () => {
    return (
      <>
        <h1>{hats.name}</h1>
        <h2>{hats.title}</h2>
        <img 
          className="avatar-image" 
          src={hats.image} 
          alt={hats.name} 
        />
        <button id="delete" onClick={handleDelete}>
          DELETE
        </button>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  useEffect(() => {
    if(hats) { 
      setEditForm(hats);
    }
  }, [hats]);

  return (
    <div className="Hats">
      { hat ? loaded() : loading() }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Update Hats" />
      </form>
    </div>
  );
}

export default Show;