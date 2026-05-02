export function canUseDom() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

export function safeParseJson<TValue>(
  rawValue: string | null,
  fallbackValue: TValue,
): TValue {
  if (!rawValue) {
    return fallbackValue
  }

  try {
    return JSON.parse(rawValue) as TValue
  } catch {
    return fallbackValue
  }
}
