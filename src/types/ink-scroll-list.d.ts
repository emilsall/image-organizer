declare module 'ink-scroll-list' {
  import type { ReactNode } from 'react';

  export interface ScrollListProps {
    children?: ReactNode;
    selectedIndex?: number;
    scrollAlignment?: 'auto' | 'start' | 'center' | 'end';
  }

  export const ScrollList: (props: ScrollListProps) => ReactNode;
}
