import { GeoLocEntity } from "types"

export const getGeoCode = async (address: string): Promise<GeoLocEntity> => {
  const geographicData = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
  const goeResData = await geographicData.json()
  const latitude = parseFloat(goeResData[0].lat)
  const longitude = parseFloat(goeResData[0].lon)
  return({latitude, longitude})
}