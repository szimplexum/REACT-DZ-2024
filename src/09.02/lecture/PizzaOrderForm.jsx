import { useState } from 'react';

export default function PizzaOrderForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    sauce: '',
    size: '26cm',
    toppings: [],
    terms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (name === 'toppings') {
      setFormData({
        ...formData,
        toppings: formData.toppings.includes(value)
          ? formData.toppings.filter((topping) => topping !== value)
          : [...formData.toppings, value],
      });
      return;
    }
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
    // Itt történne a kommunikáció a szerver felé
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <br />

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

      <br />

      <label htmlFor="sauce">Select base sauce</label>
      <select name="sauce" id="sauce" value={formData.sauce} onChange={handleInputChange}>
        <option value="">Select base sauce</option>
        <option value="tomato">Tomato</option>
        <option value="bbq">BBQ</option>
        <option value="cream">Cream</option>
      </select>

      <br />

      <strong>Select size:</strong>
      <br />
      <label htmlFor="26cm">
        <input
          type="radio"
          name="size"
          id="26cm"
          value="26cm"
          checked={formData.size === '26cm'}
          onChange={handleInputChange}
        />
        26cm
      </label>
      <label htmlFor="32cm">
        <input
          type="radio"
          name="size"
          id="32cm"
          value="32cm"
          checked={formData.size === '32cm'}
          onChange={handleInputChange}
        />
        32cm
      </label>
      <label htmlFor="55cm">
        <input
          type="radio"
          name="size"
          id="55cm"
          value="55cm"
          checked={formData.size === '55cm'}
          onChange={handleInputChange}
        />
        55cm
      </label>
      <br />
      <strong>Select toppings:</strong>
      <br />
      <label htmlFor="cheese">
        <input
          type="checkbox"
          name="toppings"
          id="cheese"
          value="cheese"
          checked={formData.toppings.includes('cheese')}
          onChange={handleInputChange}
        />
        Cheese
      </label>
      <br />
      <label htmlFor="basil">
        <input
          type="checkbox"
          name="toppings"
          id="basil"
          value="basil"
          checked={formData.toppings.includes('basil')}
          onChange={handleInputChange}
        />
        Basil
      </label>
      <br />
      <label htmlFor="ham">
        <input
          type="checkbox"
          name="toppings"
          id="ham"
          value="ham"
          checked={formData.toppings.includes('ham')}
          onChange={(e) =>
            setFormData({
              ...formData,
              toppings: formData.toppings.includes('ham')
                ? formData.toppings.filter((topping) => topping !== e.target.value)
                : [...formData.toppings, e.target.value],
            })
          }
        />
        Ham
      </label>
      <br />
      <strong>Accept terms</strong>
      <br />
      <label htmlFor="terms">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={formData.terms}
          onChange={handleInputChange}
        />
        I accept the terms
      </label>
      <br />
      <button disabled={!formData.terms} type="submit">
        Submit
      </button>
    </form>
  );
}
