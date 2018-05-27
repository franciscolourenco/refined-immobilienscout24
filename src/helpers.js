'use strict';

import $ from 'jquery'

export const getWarmRentPerSqm = (exposeHtml) => {
  const rentWarmElement = $(exposeHtml).find('.is24qa-gesamtmiete')[0]
  const rentWarm = rentWarmElement && parseFloat(rentWarmElement.innerText.replace('.','').replace(',','.'))
  const sqmElement = $(exposeHtml).find('.is24qa-flaeche')[0]
  const sqm = sqmElement && parseFloat(sqmElement.innerText)
  const rentWarmPerSqm = rentWarm / sqm
  return rentWarmPerSqm
}

export const getId = (exposeHtml) => {
  const idElement = $(exposeHtml).find('.is24-scoutid__content')[0]
  const id = idElement && idElement.innerText.match(/Scout-ID: (\w*)/)[1]
  return id
}
