import { cp, mkdir } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = dirname(fileURLToPath(import.meta.url))
const packageDir = join(root, "..", "node_modules", "onnxruntime-web", "dist")
const publicDir = join(root, "..", "public", "ort")

await mkdir(publicDir, { recursive: true })
await cp(packageDir, publicDir, { recursive: true })
console.log("Copied ONNX Runtime Web assets to public/ort")
