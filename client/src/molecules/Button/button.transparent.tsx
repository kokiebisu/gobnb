import React from 'react';
import styled, { css } from 'styled-components';
import { Box, Icon, Button } from 'atoms';
import { colors } from 'styles';
import { CustomProps } from 'molecules/Button';
import theme from 'styled-theming';

export const stroke = theme('mode', {
  light: colors.white,
});

export const hover = theme('mode', {
  light: 'rgba(190, 190, 190, 0.2)',
});

export const StyledIcon = styled(Icon)`
  &.globe {
    position: relative;
    top: 50%;
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
  &.arrow {
    width: 10px;
  }
`;

export const Flex = styled(Box)`
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Button)`
  padding: 15px;
  background-color: transparent;
  border-radius: 24px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${hover};
  }
`;

export const TransparentButton: React.FC<CustomProps> = ({
  name,
  children,
  ...props
}) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};