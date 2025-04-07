import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [value, setValue] = useState('No goods selected');
  const [selectedGoods, setSelectedGoods] = useState([]);

  const toggleGood = good => {
    setValue(`${good} is selected`);

    setSelectedGoods(prev => (prev.includes(good) ? [] : [good]));
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {value}
        <button
          onClick={() => {
            setValue('No goods selected');
            setSelectedGoods([]);
          }}
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
        />
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGoods.includes(good);
            const buttonLabel = isSelected ? '-' : '+';
            const buttonClass = isSelected ? 'button is-info' : 'button';

            return (
              <tr data-cy="Good" key={good}>
                <td>
                  <button
                    onClick={() => {
                      if (buttonLabel === '-') {
                        toggleGood(good);
                        setSelectedGoods([]);
                        setValue('No goods selected');
                      } else {
                        toggleGood(good);
                      }
                    }}
                    data-cy="AddButton"
                    type="button"
                    className={buttonClass}
                  >
                    {buttonLabel}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
