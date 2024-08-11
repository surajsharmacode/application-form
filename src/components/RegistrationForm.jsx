import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {

    const predefinedHobbies = [
        'Playing games',
        'Watching movies'
      ];
    
      // State for user-added hobbies
      const [userHobbies, setUserHobbies] = useState([]);
    
      // State for new hobby input
      const [newHobby, setNewHobby] = useState('');
    
      // Handle input change
      const handleInputChange = (e) => {
        setNewHobby(e.target.value);
      };
    
      const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (newHobby.trim() !== '') {
            setUserHobbies([...userHobbies, newHobby.trim()]);
            setNewHobby('');
          }
        }
      };
    
      // Handle adding predefined hobby
      const handleAddPredefinedHobby = (hobby) => {
        if (!userHobbies.includes(hobby)) {
          setUserHobbies([...userHobbies, hobby]);
        }
      };
    
    return (
        <div className="form-container">
            <h2>Applicant Registration Form</h2>

            <div className="form-section">
    <h3>Personal Details</h3>
    <div className="personal-details">
        <div className="form-row">
            <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Name" />
            </div>
            <div className="form-group">
                <label>Father’s Name</label>
                <input type="text" placeholder="Father's Name" />
            </div>
            <div className="form-group">
                <label>Date of Birth</label>
                <input type="text" placeholder="DD/MM/YYYY" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group">
                <label>Religion</label>
                <select>
                    <option value="">Select Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label>Caste Category</label>
                <select>
                    <option value="">Select Caste Category</option>
                    <option value="general">General</option>
                    <option value="obc">OBC</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                </select>
            </div>
            <div className="form-group gender-group">
                <label>Gender</label>
                <div className="radio-group">
                    <label><input type="radio" name="gender" /> Male</label>
                    <label><input type="radio" name="gender" /> Female</label>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="form-section">
    <h3>Address</h3>
    <div className="address-details">
        <div className="form-row">
            <div className="form-group">
                <label>Country</label>
                <select>
                    <option value="">Select Country</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    <option value="uk">UK</option>
                </select>
            </div>
            <div className="form-group">
                <label>State</label>
                <select>
                    <option value="">Select State</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="texas">Texas</option>
                    <option value="california">California</option>
                </select>
            </div>
            <div className="form-group">
                <label>District</label>
                <select>
                    <option value="">Select District</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="dallas">Dallas</option>
                    <option value="los-angeles">Los Angeles</option>
                </select>
            </div>
            <div className="form-group">
                <label>Pin Code</label>
                <input type="text" placeholder="Pin Code" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group full-width">
                <label>Address</label>
                <textarea placeholder="Address"></textarea>
            </div>
        </div>
    </div>
</div>



            <div className="form-section">
                <h3>Education</h3>
                <div className="checkbox-group education-group">
                    <label><input type="checkbox" /> High School</label>
                    <label><input type="checkbox" /> Inter Mediate</label>
                    <label><input type="checkbox" /> Graduation</label>
                    <label><input type="checkbox" /> Post Graduation</label>
                </div>
            </div>

            <div className="form-section">
                <h3>Hobbies</h3>
                <div className="hobbies-section">
                <ul>
           {predefinedHobbies.map((hobby, index) => (
             <li key={index}>
              {hobby}
              <button className='hobby-add-btn' onClick={() => handleAddPredefinedHobby(hobby)}>
                Add 
              </button>
            </li>
          ))}
        </ul>

            <div>
            <ul>
                {userHobbies.map((hobby, index) => (
                   <li key={index}>{hobby}</li>
               ))}
            </ul>
            </div>

                <div className='hobby-input'>
                <input
                   type="text"
                   value={newHobby}
                   onChange={handleInputChange}
                   onKeyDown={handleKeyPress}
                   placeholder="Enter new hobby"
                   />
                </div>
                </div>
        
            </div>

            <div className="photo-signature">
                <div className="photo">
                    <label>Photo</label>
                    <div className="photo-box"></div>
                </div>
                <div className="signature">
                    <label>Signature</label>
                    <div className="signature-box"></div>
                </div>
            </div>

            <div className="view-report">
                <a href="#">View Report</a>
            </div>

            <table className="report-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>F Name</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>District</th>
                        <th>DOB</th>
                        <th>Action (Edit/Delete)</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="8" style={{ textAlign: 'center' }}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RegistrationForm;
