import { Dom } from './dom.js';

export const modals = (() => { 
    const startModal = document.querySelector('.projectModal');
    const $modalForm = document.querySelector('#modalForm');
    const $exitModal = document.querySelector('.exit');
    const $submit = document.querySelector('#submit1');
   //add button (modal popup)
    startModal.onclick = function() {
        $modalForm.style.display = "block";
        // clearForm();
    };
    
    //modal exit button
    $exitModal.onclick = function () {
        $modalForm.style.display = "none";
    };
    
    
    window.onclick = function(event) {
        if (event.target == $modalForm) {
            $modalForm.style.display = "none";
        }
    };

    $submit.addEventListener('click', function() {
        $modalForm.style.display = 'none';
    });

})
()