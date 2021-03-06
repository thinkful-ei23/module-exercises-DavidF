'use strict';
/* global cuid */


const store = (function () {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const  hideCheckedItems = false;
  const  searchTerm = '';
  
  return {
    items,
    hideCheckedItems,
    searchTerm,
  };
}());