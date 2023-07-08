import React from 'react'
import { InputCheckboxDefault } from 'components/Input/InputCheckbox'
import { CAROUSEL_GENERATOR_FORM_FIELDS } from 'consts/carouselGenerator'
import { useCarouselGenerator } from 'hooks/useCarouselGenerator'
import { CarouselGeneratorFormItem } from './CarouselGeneratorFormItems'
import {
  CarouselGeneratorCheckboxType,
  createCarouselGeneratorInputId
} from 'utils/carouselGenerator'

const INPUT_AUTOPLAY: CarouselGeneratorCheckboxType<'autoplay'> = {
  ...createCarouselGeneratorInputId(CAROUSEL_GENERATOR_FORM_FIELDS.AUTOPLAY),
  LABEL: 'Autoplay'
}

const INPUT_WHEEL_GESTURES: CarouselGeneratorCheckboxType<'wheelGestures'> = {
  ...createCarouselGeneratorInputId(
    CAROUSEL_GENERATOR_FORM_FIELDS.WHEEL_GESTURES
  ),
  LABEL: 'Wheel gestures (under development)'
}

export const CarouselGeneratorPlugins = () => {
  const { formData, onCheckboxChange } = useCarouselGenerator()

  return (
    <>
      <CarouselGeneratorFormItem>
        <InputCheckboxDefault
          name={INPUT_AUTOPLAY.FIELD_NAME}
          id={INPUT_AUTOPLAY.ID}
          checked={formData[INPUT_AUTOPLAY.FIELD_NAME]}
          onChange={onCheckboxChange}
        >
          {INPUT_AUTOPLAY.LABEL}
        </InputCheckboxDefault>
      </CarouselGeneratorFormItem>

      <CarouselGeneratorFormItem>
        <InputCheckboxDefault
          name={INPUT_WHEEL_GESTURES.FIELD_NAME}
          id={INPUT_WHEEL_GESTURES.ID}
          checked={formData[INPUT_WHEEL_GESTURES.FIELD_NAME]}
          onChange={onCheckboxChange}
          disabled
        >
          {INPUT_WHEEL_GESTURES.LABEL}
        </InputCheckboxDefault>
      </CarouselGeneratorFormItem>
    </>
  )
}
