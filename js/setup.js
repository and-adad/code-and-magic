'use strict';

/*var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
*/

var generateWizardsJS = function (amount) {
  var dataWizards = [];

  for (var i = 0; i < amount; i++) {

    var wizard = {
      name: '',
      coatColor: '',
      eyesColor: ''
    };
    var generateName = function () {

        var DATA_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
        var DATA_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
        var name = DATA_NAMES[Math.floor(Math.random() * DATA_NAMES.length)];
        var surname = DATA_SURNAMES[Math.floor(Math.random() * DATA_SURNAMES.length)];
        var nameWizard = name + ' ' + surname;
        return nameWizard;
    };

    var generateCoatColor = function () {

        var DATA_COAT_COLOR = ['rgb(101, 137, 164', 'rgb(241, 43, 107', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
        var coatColorWizard = DATA_COAT_COLOR[Math.floor(Math.random() * DATA_COAT_COLOR.length)];
        return coatColorWizard;
    };

    var generateEyesColor = function () {

        var DATA_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

        var eyesColorWizard = DATA_EYES_COLOR[Math.floor(Math.random() * DATA_EYES_COLOR.length)];
        return eyesColorWizard;
    };

    wizard.name = generateName();
    wizard.coatColor = generateCoatColor();
    wizard.eyesColor = generateEyesColor();

    dataWizards.push(wizard);
    }
  return dataWizards;
};   

var generateWizardsDOM = function (elementsJS) {
  var wizardsSimilarDOM = [];

  for (var i = 0; i < elementsJS.length; i++) {
    var wizardTemplateDOM = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

    wizardTemplateDOM.querySelector('.setup-similar-label').textContent = elementsJS[i].name;
    wizardTemplateDOM.querySelector('.wizard-coat').style.fill = elementsJS[i].coatColor;
    wizardTemplateDOM.querySelector('.wizard-eyes').style.fill = elementsJS[i].eyesColor;

    var wizardElementDOM = wizardTemplateDOM.cloneNode(true);
    wizardsSimilarDOM.push(wizardElementDOM);
  }
  return wizardsSimilarDOM
};

var addWizard = function (elementsDOM) {
  var setupWindow = document.querySelector('.setup');
  setupWindow.classList.remove('hidden');
  setupWindow.querySelector('.setup-similar').classList.remove('hidden');

  var wizardSimilarBlock = document.querySelector('.setup-similar-list');
  var blockFragment = document.createDocumentFragment();

  for (var i = 0; i < elementsDOM.length; i++) {
    var blockFragmentWithWizard = elementsDOM[i];
    blockFragment.appendChild(blockFragmentWithWizard);
  }
  wizardSimilarBlock.appendChild(blockFragment);
};


/*  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    similarListElement.appendChild(wizardElement);
        
};*/