export const backgroundStyle = (message: string): number => {
  if (!message) { return 1 }
  if (message.includes("🤗")) { return 2 }
  if (message.includes("🥰")) { return 3 }
  if (message.includes("😄")) { return 4 }
  return 1
}