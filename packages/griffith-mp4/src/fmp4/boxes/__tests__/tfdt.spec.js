import tfdt from '../tfdt'

describe('tfdt', () => {
  it('should get video tfdt box buffer', () => {
    // prettier-ignore
    expect(tfdt({baseMediaDecodeTime: 67072})).toEqual(new Uint8Array([ 
      0x00, 0x00, 0x00, 0x14,
      0x74, 0x66, 0x64, 0x74,
      0x01, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x01, 0x06, 0x00,
    ]))
  })

  it('should get audio tfdt box buffer', () => {
    // prettier-ignore
    expect(tfdt({baseMediaDecodeTime: 231424})).toEqual(new Uint8Array([ 
      0x00, 0x00, 0x00, 0x14,
      0x74, 0x66, 0x64, 0x74,
      0x01, 0x00, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00,
      0x00, 0x03, 0x88, 0x00,
    ]))
  })
})
