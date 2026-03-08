// src/app/api/predict/route.ts

import { NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Set desired value here
    },
  },
};

// The URL of your running Python Flask server
const PYTHON_API_URL = process.env.NEXT_PUBLIC_PYTHON_API_URL;

export async function POST(request: Request) {
  if (!PYTHON_API_URL) {
    return NextResponse.json(
      { error: "API URL is not configured" },
      { status: 500 }
    );
  }
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file found." }, { status: 400 });
    }

    // We need to forward the file to the Python API
    const pythonApiFormData = new FormData();
    pythonApiFormData.append("file", file);

    const response = await fetch(`${PYTHON_API_URL}/predict`, {
      method: "POST",
      body: pythonApiFormData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.error || "Prediction API failed" },
        { status: response.status }
      );
    }

    const responseText = await response.text();
    console.log("DEBUG: Raw response from Python server:", responseText);
    const data = JSON.parse(responseText);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in Next.js API route:", error);
    // Check if the python server is running if you see a fetch error here
    return NextResponse.json(
      { error: "Internal Server Error. Is the Python server running??" },
      { status: 500 }
    );
  }
}
