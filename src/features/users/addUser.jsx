import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser, getUsers } from "./users.api";
import { useNavigate, Link } from "react-router-dom";
export const AddUser = ()=> {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
  
    const [formData, setFormData] = useState({ name: "", salary: "" });

    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        if (!formData.name || !formData.salary) {
            setError("please fill all the fields")
            return
        } 
        setError('')
        try {
            await dispatch(addUser({ ...formData}))
            .unwrap();
            navigate("/")
          } catch (err) {
            setError("Failed to add user");
            console.error(err)
          }

    };

  return (
    <div className="table-container">
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>Salary:</td>
              <td>
                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
              {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
    
    


