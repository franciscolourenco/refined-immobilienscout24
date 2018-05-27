'use strict';

import {getId, getWarmRentPerSqm} from './helpers.js'

const rentWarmPerSqm = getWarmRentPerSqm(document.body.innerHTML)

const template = document.createElement('template')
template.innerHTML = `
  <div class="mainCriteria flex-item margin-vertical-xs">
    <div class="is24qa-warmRentPerSqm is24-value font-semibold"> ${rentWarmPerSqm.toFixed(2)} €/m² </div>
    <div class="is24qa-warmRentPerSqm-label is24-label font-s"> Warm rent per m² </div>
  </div>
`.trim()

const rentWarmPerSqmElement = template.content.firstChild
const mainCriteriaContainer = document.querySelector('.main-criteria-container')

mainCriteriaContainer.appendChild(rentWarmPerSqmElement)
