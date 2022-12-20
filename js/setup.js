// Файл setup.js

'use strict';

var userDialog = document.querySelector('.setup');

userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Дамблдор', 'Волдемарт', 'Доктор Стрэндж', 'Гарри Поттер'];

for (var i = 0; i < 4; i++) {

  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_NAMES[i];
 
  similarListElement.appendChild(wizardElement);
 
 }