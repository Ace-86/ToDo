import { $storage } from './storage.js';
import { script } from './script.js';

export const $listener = (() => {
const listsContainer = document.querySelector('[data-lists]')

    listsContainer.addEventListener('click', e => {
        if (e.target.tagName.toLowerCase() === 'li') {
            selectedListId = e.target.dataset.listId
            saveAndRender()
        }
    })


 })
();