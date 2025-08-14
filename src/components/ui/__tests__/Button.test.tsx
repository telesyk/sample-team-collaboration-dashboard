import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'
import { vi } from 'vitest'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies custom className and default mode ("button")', () => {
    render(<Button className="btn-primary">Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn')
    expect(button).toHaveClass('btn-primary')
  })

  it('applies mode "tab" as className when not "button"', () => {
    render(<Button mode="tab">Tab</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('tab')
    expect(button).not.toHaveClass('btn')
  })

  it('applies mode "link"', () => {
    render(<Button mode="link">Tab</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn-link')
    expect(button).not.toHaveClass('btn')
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

  it('renders nothing if no children', () => {
    render(<Button />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
