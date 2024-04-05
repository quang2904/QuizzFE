import type { SelectProps } from 'ant-design-vue'
export const LIST_FILTER: SelectProps['options'] = [
  {
    value: 1,
    label: 'Mới nhất',
  },
  {
    value: 2,
    label: 'Cũ nhất',
  },
  {
    value: 3,
    label: 'A-Z',
  },
]

export const LIST_SORT: SelectProps['options'] = [
  {
    value: 1,
    label: 'Mới nhất',
  },
  {
    value: 2,
    label: 'Cũ nhất',
  },
  {
    value: 3,
    label: 'A-Z',
  },
]

export const KEY_TABS_LIBRARY = {
  TAB_CONTENT: 1,
  TAB_TEAM: 2,
  TAB_FOLDER: 3,
}

export const LIST_TABS_LIBRARY = [
  {
    key: KEY_TABS_LIBRARY.TAB_CONTENT,
    label: 'Tất cả nội dung',
  },
  {
    key: KEY_TABS_LIBRARY.TAB_TEAM,
    label: 'Đội',
  },
  {
    key: KEY_TABS_LIBRARY.TAB_FOLDER,
    label: 'Thư mục',
  },
]
