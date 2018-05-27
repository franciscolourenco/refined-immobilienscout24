'use strict';

import axios from 'axios'
import {getId, getWarmRentPerSqm} from './helpers.js'

const apartmentAnchorElements = document.querySelectorAll('.result-list-entry__brand-title-container')

apartmentAnchorElements.forEach(({href}) => {
  axios.get(href)
    .then(response => {
      console.log('receiving', href)
      return response.data
    })
    .then(html => ({
      id: getId(html),
      warmRentPerSqm: getWarmRentPerSqm(html),
    }))
    .then(apartment => {
      const template = document.createElement('template')
      const warmRentPerSqm = apartment.warmRentPerSqm.toFixed(2)
      template.innerHTML = `
        <dl class="grid-item result-list-entry__primary-criterion " role="presentation">
          <dd class="font-nowrap font-line-xs">
            <span>
              <span class="onlySmall">
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">${warmRentPerSqm}</font>
                </font><!-- -->
                <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;">€/m²</font>
                </font>
              </span>
              <span class="onlyLarge">${warmRentPerSqm}</span>
            </span>
          </dd>
          <dt class="font-s onlyLarge">
            <abbr title="Zimmer">€/m²</abbr>
          </dt>
        </dl>
      `.trim()
      const warmRentPerSqmElement = template.content.firstChild
      const apartmentElement = document.querySelector(`#result-${apartment.id}`)
      const detailsElement = apartmentElement.querySelector(`div[data-is24-qa=attributes]`)
      detailsElement.appendChild(warmRentPerSqmElement)

    })
})


