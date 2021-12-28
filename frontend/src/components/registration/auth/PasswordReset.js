import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap'
import { api } from '../../../api/api';
import axios from 'axios'
import { useNavigate } from 'react-router';

export function PasswordReset() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    axios.post(api.auth.resetPassword)
      .then((res) => {
        console.log(res.data)
        setSuccess(true)
      })
      .finally(setLoading(false))
  }
  return (
    <Row className="justify-content-md-center mt-5">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <Col xs={12} md={6}>
          <h1 className='ps-1'>Password reset</h1>
          <form onSubmit={handleSubmit}>
            <input
              className='form-control'
              placeholder='Your e-mail address'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' className='btn btn-primary'>Password Reset</button>
          </form>
          <Link to='/accounts/resend-email-verification'>Resend</Link>
        </Col>
      </div>
    </Row>
  )
}
