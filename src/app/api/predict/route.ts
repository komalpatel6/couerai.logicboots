import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60; // 60s timeout for model inference

// The URL of your running Python Flask/FastAPI server (prefers server-side private env var)
const PYTHON_API_URL = process.env.PYTHON_API_URL || process.env.NEXT_PUBLIC_PYTHON_API_URL;

export async function POST(request: NextRequest) {
  if (!PYTHON_API_URL) {
    return NextResponse.json(
      { error: "Diagnostic prediction service is not configured." },
      { status: 503 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { error: "Audio/PCG file is required for analysis." },
        { status: 400 }
      );
    }

    // Forward the file to the Python API
    const pythonApiFormData = new FormData();
    pythonApiFormData.append("file", file);

    const response = await fetch(`${PYTHON_API_URL}/predict`, {
      method: "POST",
      body: pythonApiFormData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = "Prediction analysis failed.";
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.error || errorMessage;
      } catch {
        // Fallback to text if not JSON
      }

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in diagnostic prediction route:", error);
    return NextResponse.json(
      { error: "Internal Server Error in prediction service." },
      { status: 500 }
    );
  }
}
