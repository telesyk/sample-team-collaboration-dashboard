import { render, screen } from '@testing-library/react'
import Spinner from '../Spinner'

describe('Spinner', () => {
  it('renders a spinner with correct classes', () => {
    render(<Spinner />)
    const spinner = screen.getByText('', { selector: 'span' })
    // Check for the expected classes
    expect(spinner).toHaveClass('loading')
    expect(spinner).toHaveClass('loading-spinner')
  })

  it('renders a span element', () => {
    render(<Spinner />)
    const spinner = screen.getByText('', { selector: 'span' })
    expect(spinner.tagName).toBe('SPAN')
  })
})
