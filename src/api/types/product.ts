export type IDetail = {
  characteristicPropertyId: string
  characteristicPropertyName: string
  characteristicValueId: string
  characteristicValueName: string
}

// export type IPrice = {
//   characteristicPropertyId: string
//   characteristicPropertyName: string
//   characteristicValueId: string
//   characteristicValueName: string
// }

export type ICharacteristic = {
  characteristicName: string
  characteristicDetails: Array<IDetail>
  // characteristicPrices: Array<IDetail>
}

export type IProduct = {
  id: string
  name: string
  characteristics: Array<ICharacteristic>
}
