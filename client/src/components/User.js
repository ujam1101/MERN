import React from 'react'

export default function User({ user }) {
  return (
    <div>
      <div className="list">
        <h3> Name: {user.name} </h3>
        <p> Age: {user.age} </p>
        <p> Username: {user.username}</p>
        <p>Mongodb_ID:{user._id}</p>
      </div>
    </div>
  )
}
