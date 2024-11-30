'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function LibraryTrackerPage() {
  return (
    <main className="flex flex-col items-center p-8 md:p-16 bg-gray-100 text-gray-900 min-h-screen">
      {/* Header Section */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mt-2 mb-4 md:text-5xl">
          Library Tracker - OCR and Book Identification
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          A comprehensive library tracker system designed to detect book covers, extract text using OCR, identify books via Google Books API, and analyze confidence levels for accurate results.
        </p>
      </div>

      {/* Section 1 - Overview */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The library tracker is an advanced system that combines computer vision, Optical Character Recognition (OCR), and external APIs to identify books and provide detailed metadata about them. The program follows a structured pipeline:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 leading-relaxed">
          <li>Detect books and crop their covers from images using bounding boxes.</li>
          <li>Extract text from cropped images using Tesseract OCR.</li>
          <li>Analyze the confidence levels of the extracted text to optimize accuracy.</li>
          <li>Query the Google Books API to retrieve book titles, authors, and metadata.</li>
        </ul>
      </section>

      {/* Section 2 - Key Code Snippets */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4">Key Code Highlights</h2>

        {/* Snippet 1: Book Detection */}
        <h3 className="text-xl font-bold mb-2">1. Detecting Books and Cropping Covers</h3>
        <p className="text-gray-700 leading-relaxed">
          Books are detected in images using an inference client that identifies bounding boxes. Cropped images are saved for further processing.
        </p>
        <SyntaxHighlighter language="python" style={materialOceanic}>
          {`def crop_boxes(results, img_path, output_folder):
    image = Image.open(img_path)
    os.makedirs(output_folder, exist_ok=True)

    for i, prediction in enumerate(results['predictions']):
        x, y, width, height = prediction['x'], prediction['y'], prediction['width'], prediction['height']
        xmin, ymin = int(x - width / 2), int(y - height / 2)
        xmax, ymax = int(x + width / 2), int(y + height / 2)
        cropped_image = image.crop((xmin, ymin, xmax, ymax))
        cropped_image.save(os.path.join(output_folder, f"book_{i+1}.jpg"))`}
        </SyntaxHighlighter>

        {/* Snippet 2: Text Extraction and Thresholding */}
        <h3 className="text-xl font-bold mb-2 mt-8">2. Text Extraction with Thresholding</h3>
        <p className="text-gray-700 leading-relaxed">
          The program uses Tesseract OCR with different threshold levels to extract text from images, optimizing the results through both inverted and non-inverted images.
        </p>
        <SyntaxHighlighter language="python" style={materialOceanic}>
          {`def extract_text(blurred, threshold_value, use_inversion):
    if use_inversion:
        _, thresh = cv2.threshold(blurred, threshold_value, 255, cv2.THRESH_BINARY_INV)
    else:
        _, thresh = cv2.threshold(blurred, threshold_value, 255, cv2.THRESH_BINARY)
    
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (2, 2))
    dilated = cv2.dilate(thresh, kernel, iterations=1)

    details = pytesseract.image_to_data(dilated, config='--psm 6', output_type=pytesseract.Output.DICT)
    result = {'text': '', 'confidence': []}
    
    for i in range(len(details['text'])):
        if int(details['conf'][i]) > 0:
            result['text'] += details['text'][i] + ' '
            result['confidence'].append(details['conf'][i])

    return result, dilated`}
        </SyntaxHighlighter>

        {/* Snippet 3: Querying Google Books API */}
        <h3 className="text-xl font-bold mb-2 mt-8">3. Querying Google Books API</h3>
        <p className="text-gray-700 leading-relaxed">
          Extracted text is passed to the Google Books API to retrieve book metadata, including title and author information.
        </p>
        <SyntaxHighlighter language="python" style={materialOceanic}>
          {`def search_google_books(query):
    url = "https://www.googleapis.com/books/v1/volumes"
    params = {'q': query, 'maxResults': 5, 'printType': 'books', 'key': google_books_api_key}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()
    else:
        print(f"Error: {response.status_code} - {response.reason}")
        return None`}
        </SyntaxHighlighter>
      </section>

      {/* Section 3 - Insights and Challenges */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4">Insights and Challenges</h2>
        <p className="text-gray-700 leading-relaxed">
          Developing this program was a complex yet rewarding experience. Some of the key insights and challenges include:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700 leading-relaxed">
          <li>
            <strong>Optimizing OCR Performance:</strong> Experimenting with multiple thresholds and inverted/non-inverted images significantly improved text extraction accuracy.
          </li>
          <li>
            <strong>Integrating External APIs:</strong> Using the Google Books API required careful parsing of responses to handle missing metadata gracefully.
          </li>
          <li>
            <strong>Confidence Analysis:</strong> Calculating average confidence levels for extracted text helped identify the most reliable thresholds and orientations.
          </li>
        </ul>
      </section>

      {/* Section 4 - Conclusion */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          The library tracker is a testament to the power of combining machine learning, OCR, and API integration to solve real-world problems. This project provided invaluable hands-on experience with image processing, text recognition, and data retrieval.
        </p>
      </section>
    </main>
  );
}
