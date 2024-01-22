import EmblaCarousel from '../components/EmblaCarousel'
import { mockTestElements } from './mocks'
import { FIXTURE_AXIS_Y } from './fixtures/axis-vertical.fixture'

describe('➡️  Axis - Vertical', () => {
  describe('Translates correctly when direction is:', () => {
    test('Vertical', () => {
      const emblaApi = EmblaCarousel(mockTestElements(FIXTURE_AXIS_Y), {
        containScroll: false,
        axis: 'y'
      })

      expect(emblaApi.containerNode().style.transform).toBe(
        'translate3d(0px,100px,0px)'
      )
    })
  })
})
