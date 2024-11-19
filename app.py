from flask import Flask, jsonify

app = Flask(__name__)

# Sample data for matches
matches = [
    "Dinamo Zagreb vs Hajduk Split",
    "Rijeka vs Osijek",
    "Hrvatska vs Engleska"
]

@app.route('/api/matches', methods=['GET'])
def get_matches():
    return jsonify(matches)

@app.route('/api/ai-analysis', methods=['GET'])
def ai_analysis():
    # Simplified AI logic for prediction
    prediction = "Hrvatska ima najveće šanse za pobjedu protiv Engleske (70%)."
    return jsonify({"prediction": prediction})

if __name__ == '__main__':
    app.run(debug=True)
