import { useState } from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
  // state to hold formData
  const [newForm, setNewForm] = useState({
    name: '',
    image: '',
    title: '',
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createHats(newForm);
    setNewForm({
      name: '',
      image: '',
      title: '',
    });
  };

  // loaded function
  const loaded = () => {
    return props.hats.map((hat) => (
      <div key={hat._id} className="hat">
        <Link to={`/hats/${hat._id}`}>
          <h1>{hat.name}</h1>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section className="hat-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create Hat" />
      </form>
      {props.hats ? loaded() : loading()}
    </section>
  );
}

export default Index;