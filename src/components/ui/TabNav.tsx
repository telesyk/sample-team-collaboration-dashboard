import { Button } from '@/components'

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <div role="tablist" className="tabs tabs-lift w-full">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id
        return (
          <Button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            mode="tab"
            className={'flex-1 border-b-0' + (isActive ? ' tab-active' : '')}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </Button>
        )
      })}
    </div>
  )
}
