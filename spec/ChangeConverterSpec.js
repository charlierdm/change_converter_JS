describe('changeConverter', () => {

  it('converts £7.42', () => {
    expect(changeConverter(7.42)).toEqual(["£5", "£1", "£1", "20p", "20p", "2p"])
  })

  it('converts £40', () => {
    expect(changeConverter(40)).toEqual(["£20", "£20"])
  })

  it('converts £16.30', () => {
    expect(changeConverter(16.30)).toEqual(["£10", "£5", "£1", "20p", "10p"])
  })

  it('converts £19.99', () => {
    expect(changeConverter(19.99)).toEqual(["£10", "£5", "£1", "£1", "£1", "£1", "50p", "20p", "20p", "5p", "2p", "2p"])
  })

  it('converts £76.81', () => {
    expect(changeConverter(76.81)).toEqual(["£50", "£20", "£5", "£1", "50p", "20p", "10p", "1p"])
  })
})
