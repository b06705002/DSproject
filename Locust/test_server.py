from flask import Flask, request, jsonify

app = Flask(__name__)

# load testing
@app.route('/api/test', methods=['POST'])
def load_testing():

    if request.json['query'] == "test":
        return jsonify(
            {
                'res': 'success',
            }
        )
    return jsonify(
        {
            'res': 'failed'
        }
    )

if __name__ == '__main__':
    app.run(debug=True)