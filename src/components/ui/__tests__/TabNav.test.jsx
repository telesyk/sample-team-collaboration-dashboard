import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'
import TabNav from '../TabNav'

describe('TabNav', () => {
  const tabs = [
    { id: 'login', label: 'Login' },
    { id: 'signup', label: 'Sign Up' },
  ]
  const onTabChange = vi.fn()

  it('renders all tabs', () => {
    render(<TabNav tabs={tabs} activeTab="login" onTabChange={onTabChange} />)
    expect(screen.getByRole('tab', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /sign up/i })).toBeInTheDocument()
  })

  it('highlights the active tab', () => {
    render(<TabNav tabs={tabs} activeTab="signup" onTabChange={onTabChange} />)
    const signupTab = screen.getByRole('tab', { name: /sign up/i })
    expect(signupTab).toHaveAttribute('aria-selected', 'true')
    expect(signupTab).toHaveAttribute('tabindex', '0')
  })

  it('calls onTabChange when a tab is clicked', () => {
    render(<TabNav tabs={tabs} activeTab="login" onTabChange={onTabChange} />)
    const signupTab = screen.getByRole('tab', { name: /sign up/i })
    fireEvent.click(signupTab)
    expect(onTabChange).toHaveBeenCalledWith('signup')
  })
})
