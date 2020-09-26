import React from 'react';
import { css, DefaultTheme, ThemedCssFunction } from 'styled-components';
import { Box, Text } from 'atoms';

interface Props {
  children: React.ReactNode;
  styles: {
    wrapper: ThemedCssFunction<DefaultTheme>;
  };
}

export const SectionA: React.FC<Props> = ({
  styles = {
    wrapper: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  },
  children = <Text>Section</Text>,
  ...props
}) => {
  return (
    <Box styles={styles.wrapper} {...props}>
      {children}
    </Box>
  );
};