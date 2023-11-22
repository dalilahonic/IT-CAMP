import { useCallback, useContext } from 'react';
import { TabsContext } from './Tabs';

function TabsItem(props) {
  const { title, tabKey } = props;

  const context = useContext(TabsContext);
  console.log(context);

  return (
    <>
      <div
        style={{
          border:
            context.active === tabKey
              ? '1px solid black'
              : '0',
          padding: '8px',
        }}
        onClick={() => context.setActive(tabKey)}
      >
        Vrednost {tabKey}
      </div>
      {/* <div
        style={{
          border:
            context.active === 1 ? '1px solid black' : '0',
        }}
        onClick={() => context.setActive(1)}
      >
        Vrednost
      </div>
      <div
        style={{
          border:
            context.active === 2 ? '1px solid black' : '0',
        }}
        onClick={() => context.setActive(2)}
      >
        Vrednost
      </div> */}
    </>
  );
}

export default TabsItem;
