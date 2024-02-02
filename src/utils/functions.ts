interface TravelParams {
  adult?: number
  children?: number
  infant?: number
  pet?: number
  checkIn?: string
  checkOut?: string
  where?: string
}

export function constructUrlParams(obj: TravelParams): string {
  const urlParams = Object.entries(obj)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([key, value]) => value > 0 || String(value).length > 0)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

  return urlParams
}
