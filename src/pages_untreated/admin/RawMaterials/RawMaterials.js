/* eslint-disable react/prop-types */
import React from 'react';
import ItemsList from '~/components/ItemsList';

import Table from './RawMaterialsTable';
import Card from './RawMaterialCard';

const API_URL = '/api/rawmaterials';

export default function RawMaterials({
  cards = { show: Table, update: Card, create: Card, view: Card },
  apiURL = API_URL,
  showTitle = false,
  search = false,
  defaultCreateButton = false,
  readOnly = true,
  aggregate = false,
  children,
  ...rest
}) {
  return (
    <ItemsList
      cards={cards}
      apiURL={apiURL}
      showTitle={showTitle}
      search={search}
      defaultCreateButton={defaultCreateButton}
      readOnly={readOnly}
      aggregate={aggregate}
      {...rest}
    >
      {children}
    </ItemsList>
  );
}
