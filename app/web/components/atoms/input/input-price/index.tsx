import React from 'react';
import { PriceInputTemplate, PriceInputTemplateProps } from './template';

export interface PriceInputProps extends PriceInputTemplateProps {}

export const PriceInput: React.FC<PriceInputProps> = (props) => {
  return <PriceInputTemplate {...props} />;
};
