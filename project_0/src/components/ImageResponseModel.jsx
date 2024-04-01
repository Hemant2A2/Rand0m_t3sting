
const ImageResponseModel = async (image) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "Describe the image in the picture.";
  
    const imageParts = await Promise.all(
      [...image.files].map(fileToGenerativePart)
    );
  
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    return text;
}

export default ImageResponseModel
