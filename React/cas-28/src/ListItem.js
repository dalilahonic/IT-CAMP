import React from 'react';

// jednostavna komponenta koja preko propsa dobija title, selected, handleClick funkciju
// prikazete title kao text, selected vam je vrednost da li je ovaj element selected
// handleClick vam menja da li je item selectovan ili ne.

function ListItem(props) {
  const { selected, title, onSelect } = props;
  return (
    <div>
      <p>
        <input />
      </p>
    </div>
  );
}

export default ListItem;
