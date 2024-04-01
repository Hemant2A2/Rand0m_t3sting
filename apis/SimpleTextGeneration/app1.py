from dotenv import load_dotenv
from flask import Flask, request, jsonify
import os
import google.generativeai as genai


load_dotenv() 
app = Flask(__name__)

os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))


model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])


def get_gemini_response(question):
    response = chat.send_message(question,stream=True)
    response.resolve()
    return response

@app.route('/', methods=['POST'])
def get_response():
    data = request.get_json()
    question = data["question"]
    response = get_gemini_response(question)
    response_text = response.text
    return jsonify({"response": response_text})

if __name__ == '__main__':
    app.run(debug=True)