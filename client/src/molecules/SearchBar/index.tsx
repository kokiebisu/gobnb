import React from 'react';

// block
import SearchBarLarge from 'molecules/SearchBar/searchbar.large';
import SearchBarSmall from 'molecules/SearchBar/searchbar.small';

type SearchBarProps = {
  type: string;
  onPress: () => void;
};

interface mapProps {
  [key: string]: JSX.Element;
}

export const SearchBar = ({ type, ...props }: SearchBarProps) => {
  const types: mapProps = {
    mobile: <SearchBarLarge {...props} />,
    normal: <SearchBarSmall {...props} />,
  };
  return types[type];
};