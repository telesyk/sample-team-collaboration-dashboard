import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'
import { vi } from 'vitest'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Button className="btn-primary">Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-primary')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('passes additional props to button', () => {
    render(
      <Button type="submit" data-testid="my-btn">
        Submit
      </Button>
    )
    const button = screen.getByTestId('my-btn')
    expect(button).toHaveAttribute('type', 'submit')
  })
})
