'use client';

import { Theme, ThemePanel, Box } from '@kushagradhawan/kookie-ui';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Theme
      accentColor="gray"
      grayColor="auto"
      material="solid"
      radius="medium"
      fontFamily="sans"
    >
      {children}
      <ThemePanel defaultOpen={false} />
    </Theme>
  );
}

export { Box };
