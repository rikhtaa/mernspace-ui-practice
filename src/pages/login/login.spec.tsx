import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import LoginPage from './login'
describe('/Login', ()=>{
    it("should login user", ()=>{
    render(<LoginPage/>)
    expect(screen.getByText(/Sign in/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument
    expect(screen.getByRole('button', {name: 'Login'})).toBeInTheDocument()
    expect(screen.getAllByRole('checkbox', {name: 'Remember me'}))
    expect(screen.getByText('Forget Password')).toBeInTheDocument
  })
})