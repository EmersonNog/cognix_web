export function CheckoutErrorMessage({ message }: { message: string | null }) {
  if (!message) {
    return null
  }

  return (
    <p
      role="alert"
      className="mt-3 rounded-[16px] border border-[rgba(255,112,112,0.3)] bg-[rgba(255,112,112,0.08)] px-4 py-3 text-[13px] leading-[1.5] text-[var(--ink)]"
    >
      {message}
    </p>
  )
}
