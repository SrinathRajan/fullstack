// import React from 'react';
import '../assets/css/profile.css';

function Profile(props) {
  // destructure the props object
  const { name, email, password, aadhar, mobile, documents } = props;

  return (
    <div id='promain'>
        <div id='blur'>
        <div className="profile">
        <div className="profile-header">
            <h1 className="profile-name">User Profile</h1>
        </div>
        <div className="profile-form">
            <div className="profile-field">
            <label className="profile-label" htmlFor="name">Name</label>
            <input className="profile-input" type="text" id="name" name="name" value={name} />
            </div>
            <div className="profile-field">
            <label className="profile-label" htmlFor="email">Email</label>
            <input className="profile-input" type="email" id="email" name="email" value={email} />
            </div>
            <div className="profile-field">
            <label className="profile-label" htmlFor="password">Password</label>
            <input className="profile-input" type="password" id="password" name="password" value={password} />
            </div>
            <div className="profile-field">
            <label className="profile-label" htmlFor="aadhar">Aadhar Number</label>
            <input className="profile-input" type="text" id="aadhar" name="aadhar" value={aadhar} />
            </div>
            <div className="profile-field">
            <label className="profile-label" htmlFor="mobile">Mobile Number</label>
            <input className="profile-input" type="tel" id="mobile" name="mobile" value={mobile} />
            </div>
            <div className="profile-field">
            <label className="profile-label" htmlFor="documents">Documents Required</label>
            <input className="profile-input" type="file" id="documents" name="documents" multiple />
            </div>
            <div className="profile-field">
            <button className="profile-button" type="submit">Submit</button>
            </div>
        </div>
        </div>
    </div>

        </div>
  );
}

export default Profile;