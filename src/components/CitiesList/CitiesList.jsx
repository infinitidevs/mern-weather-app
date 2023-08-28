import React from 'react';

import { IconList, ListWrapper } from './styles';

const CitiesList = () => {
  return (
    <ListWrapper>
      <IconList
        src="https://cdn.jsdelivr.net/gh/infinitidevs/mern-nasa-app@main/src/assets/list.svg"
        alt="list"
      />
    </ListWrapper>
  );
};

export default CitiesList;
