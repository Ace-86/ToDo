import { Dom } from './dom.js';

export const modals = (() => { 
    const startModal = document.querySelector('.projectModal');
    const $modalForm = document.querySelector('#modalForm');
    const $exitModal = document.querySelector('.exit');
   //add button (modal popup)
    startModal.onclick = function() {
        $modalForm.style.display = "block";
        // clearForm();
    };
    
    //modal exit button
    $exitModal.onclick = function () {
        $modalForm.style.display = "none";
    };
    //modal submit button
    // $submit.onclick = function() {
    //     getUserInput();
    //     createCard();
    //     $modalForm.style.display = "none";
    // };
    
    // closes modal when clicked outside modal window
    window.onclick = function(event) {
        if (event.target == $modalForm) {
            $modalForm.style.display = "none";
        }
    };
})
()