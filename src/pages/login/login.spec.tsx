import {describe, it, expect} from 'vitest'
import {render, screen} from '@testing-library/react'
import LoginPage from './login'
describe('/Login', ()=>{
    it("should login user", ()=>{
    render(<LoginPage/>)
    expect(screen.getByText(/Sign in/)).toBeInTheDocument()
  })
})