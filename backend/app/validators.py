from flask import jsonify

def validate_user_data(data):
    required_fields = ['name', 'email', 'password']
    for field in required_fields:
        if field not in data:
            return jsonify({"error": f"{field} is required"}), 400

    if len(data['password']) < 8:
        return jsonify({"error": "Password must be at least 8 characters long"}), 400

    return None
