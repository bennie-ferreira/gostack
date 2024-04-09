import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home page example', () => {
  it('renders Home page', () => {
    render(<Home />)
  })
})