import { shallowMount, mount } from '@vue/test-utils'
import Card from '@/components/Card'

describe('When I create the Card component', () => {
  const card = {
    title: 'Card title',
    url: 'https://www.gravatar.com/avatar?s=15'
  }
  const createCardWrapper = (propsData = {}, slot, real = false) => {
    const obj = {
      propsData,
      slots: {
        default: slot || 'Card'
      }
    }

    return real ? mount(Card, { ...obj }) : shallowMount(Card, { ...obj })
  }

  it(`should have a title if the card prop is added with the title attribute,
      and has a showTitle prop true, and have a text-shadow class`, () => {
    const wrapper = createCardWrapper({ card, showTitle: true })
    const title = wrapper.find('.card>h1')
    expect(wrapper.exists()).toBe(true)
    expect(title.exists()).toBe(true)
    expect(title.classes().length).toBe(1)
    expect(title.classes()).toContainEqual('text-shadow')
  })

  it(`should have a background-image if the card prop is added with the url attribute`, () => {
    const wrapper = createCardWrapper({ card })
    const cardDiv = wrapper.find('.card')
    expect(wrapper.exists()).toBe(true)
    expect(cardDiv.exists()).toBe(true)
    expect(cardDiv.attributes().style).toBe('background-image: url(https://www.gravatar.com/avatar?s=15);')
  })

  it(`should have a less-padding class if the lessPadding prop is added and set to true`, () => {
    const wrapper = createCardWrapper({ card, lessPadding: true })
    const cardDiv = wrapper.find('.card')
    expect(wrapper.exists()).toBe(true)
    expect(cardDiv.exists()).toBe(true)
    expect(cardDiv.classes().length).toBe(2)
    expect(cardDiv.classes()).toContainEqual('less-padding')
  })

  it(`should have a not-clickable class if the notClickable prop is added and set to true`, () => {
    const wrapper = createCardWrapper({ card, notClickable: true })
    const cardDiv = wrapper.find('.card')
    expect(wrapper.exists()).toBe(true)
    expect(cardDiv.exists()).toBe(true)
    expect(cardDiv.classes().length).toBe(2)
    expect(cardDiv.classes()).toContainEqual('not-clickable')
  })

  it(`should have a not-clickable class if the notClickable prop is added and set to true`, () => {
    const wrapper = createCardWrapper({ card, notClickable: true })
    const cardDiv = wrapper.find('.card')
    expect(wrapper.exists()).toBe(true)
    expect(cardDiv.exists()).toBe(true)
    expect(cardDiv.classes().length).toBe(2)
    expect(cardDiv.classes()).toContainEqual('not-clickable')
  })

  it('should print html inside slot', () => {
    const html = '<p id="find-this-id">This is a card slot</p>'
    const wrapper = createCardWrapper({}, html)
    const slot = wrapper.find('p#find-this-id')

    expect(wrapper.exists()).toBe(true)
    expect(slot.exists()).toBe(true)
    expect(slot.html()).toBe(html)
  })

  it('should emit a click event when clicked on a card', () => {
    const wrapper = createCardWrapper({ card }, null, true)

    const cardDiv = wrapper.find('.card')
    cardDiv.trigger('click')
    cardDiv.trigger('click')
    cardDiv.trigger('click')

    expect(wrapper.exists()).toBe(true)
    expect(cardDiv.exists()).toBe(true)
    setTimeout(() => {
      expect(wrapper.emitted('click')).toBeTruthy()
      expect(wrapper.emitted('click').length).toBe(3)
    })
  })

  it('should match snapshot', () => {
    const wrapper = createCardWrapper({ card, showTitle: true, lessPadding: true })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
