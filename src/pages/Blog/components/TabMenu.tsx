import { TabMenuContainer, TabButton, ActiveIndicator } from './style';
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
    <TabMenuContainer>
      {tabs.map(tab => (
        <TabButton
          key={tab.value}
          onClick={() => onChange(tab.value)}
          $active={activeTab === tab.value}
        >
          {tab.label}
          {activeTab === tab.value && (
            <ActiveIndicator layoutId="tab-indicator" />
          )}
        </TabButton>
      ))}
    </TabMenuContainer>
  )
}

export default TabMenu;