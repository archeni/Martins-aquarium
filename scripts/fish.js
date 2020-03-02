import { fishProvider } from './FishDataProvider.js';
import print from './components/utilities.js';

export const fishListFunc = () => {
  const fishArr = fishProvider()
  
  for (const fish of fishArr) {
    let stringDom = '';
    stringDom = `
    <section class='fish border'>
      <img class='picture' src='${fish.img}'>
      <button id='button--${fish.name.split(' ').join('')}'>Details</button>
      <dialog id='details--${fish.name.split(' ').join('')}'>
        <div class='fish-details'>
          <ul>
            <li>${fish.species}</li>
            <li>${fish.location}</li>
            <li>${fish.diet.join(', ')}</li>
            <li>${fish.size}</li>
          </ul>
        </div>
        <button class="button--close" id="close-${fish.name.split(' ').join('')}">Close Dialog</button>
      </dialog>
    </section>`;
    print.printToDom('fish-list', stringDom);
  }
}

