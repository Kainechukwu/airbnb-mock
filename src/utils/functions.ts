interface TravelParams {
  adult: number
  children: number
  infant: number
  pet: number
}

export function constructUrlParams(obj: TravelParams): string {
  const urlParams = Object.entries(obj)
    .filter(([key, value]) => value > 0)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

  return urlParams
}
