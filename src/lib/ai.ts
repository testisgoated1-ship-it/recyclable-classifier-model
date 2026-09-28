/**
 * AI connector stubs — wire these to your backend AI endpoints.
 * Each function calls the backend and returns a typed result.
 * Replace the URL and logic below with real backend integration.
 */

export type ClassifyProblemResult = {
  category: string
  summary: string
  severity: "low" | "medium" | "high"
}

export type RecyclabilityResult = {
  recyclable: boolean
  material: string
  instructions: string
  confidence: number
}

/**
 * Classifies an environmental problem from a description and optional image.
 * Stub: calls /api/classify-problem on your backend.
 */
export async function classifyProblem(
  description: string,
  imageBase64?: string
): Promise<ClassifyProblemResult> {
  void imageBase64
  // TODO: Replace with your actual backend endpoint
  // const response = await fetch("/api/classify-problem", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ description, imageBase64 }),
  // })
  // if (!response.ok) throw new Error("Classification failed")
  // return response.json()

  // Simulated AI response for frontend demo
  await new Promise((r) => setTimeout(r, 1200))
  const lower = description.toLowerCase()
  if (lower.includes("dump") || lower.includes("trash") || lower.includes("garbage"))
    return { category: "illegal_dumping", summary: "Illegal waste dumping detected. This requires prompt municipal attention.", severity: "high" }
  if (lower.includes("pollut") || lower.includes("chemical") || lower.includes("oil"))
    return { category: "pollution", summary: "Environmental pollution identified. May pose health risks to surrounding ecosystem.", severity: "high" }
  if (lower.includes("hazard") || lower.includes("toxic") || lower.includes("battery"))
    return { category: "hazardous_waste", summary: "Hazardous materials detected. Requires specialized disposal team.", severity: "high" }
  if (lower.includes("graffiti") || lower.includes("vandal") || lower.includes("spray"))
    return { category: "graffiti", summary: "Vandalism/graffiti identified. Recommend reporting to local authorities.", severity: "low" }
  if (lower.includes("litter") || lower.includes("bottle") || lower.includes("can"))
    return { category: "litter", summary: "General littering observed. Community cleanup recommended.", severity: "low" }
  return { category: "other", summary: "Environmental issue detected. Municipal review recommended.", severity: "medium" }
}

/**
 * Analyzes an image of trash to determine recyclability.
 * Stub: calls /api/check-recyclability on your backend.
 */
export async function checkRecyclability(
  imageBase64: string
): Promise<RecyclabilityResult> {
  // TODO: Replace with your actual backend endpoint
  // const response = await fetch("/api/check-recyclability", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ imageBase64 }),
  // })
  // if (!response.ok) throw new Error("Recyclability check failed")
  // return response.json()

  // Simulated AI response for frontend demo
  await new Promise((r) => setTimeout(r, 1500))
  // Randomly simulate different outcomes based on image data length as a proxy
  const seed = imageBase64.length % 6
  const results: RecyclabilityResult[] = [
    { recyclable: true, material: "PET Plastic (#1)", instructions: "Empty, rinse, and place in blue recycling bin. Remove cap if different plastic type.", confidence: 0.94 },
    { recyclable: true, material: "Cardboard / Paper", instructions: "Flatten boxes and keep dry. Place in paper recycling bin.", confidence: 0.91 },
    { recyclable: true, material: "Aluminum Can", instructions: "Rinse and crush if possible. Place in metal recycling bin or return for deposit.", confidence: 0.97 },
    { recyclable: false, material: "Styrofoam / EPS Foam", instructions: "Not accepted in standard recycling. Check for specialized foam drop-off locations in your area.", confidence: 0.89 },
    { recyclable: false, material: "Mixed Plastic (#7)", instructions: "Mixed plastics are generally not recyclable. Dispose in general waste.", confidence: 0.82 },
    { recyclable: true, material: "Glass Bottle", instructions: "Rinse clean and place in glass recycling. Remove caps. Check local guidelines for color separation.", confidence: 0.95 },
  ]
  return results[seed]
}
