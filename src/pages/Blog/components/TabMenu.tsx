import type { BlogCategory } from '@/types/blog';

interface TabMenuProps {
  activeTab: BlogCategory
  onChange: (tab: BlogCategory) => void
}

const tabs: { label: string; value: BlogCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Dev', value: 'dev' },
  { label: 'Research', value: 'research' },
  { label: 'Book', value: 'book' }
]

const TabMenu = ({ activeTab, onChange }: TabMenuProps) => {
  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      {tabs.map(tab => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          style={{
            border: 'none',
            background: 'none',
            fontWeight: activeTab === tab.value ? 600 : 400,
            opacity: activeTab === tab.value ? 1 : 0.5,
            cursor: 'pointer'
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default TabMenu;