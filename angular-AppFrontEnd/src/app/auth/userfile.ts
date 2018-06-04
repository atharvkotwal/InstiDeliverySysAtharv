export class Userfile{
        "id": number;
        "username": string;
        "first_name": string;
        "type": string;
        "profile_picture": string;
        "last_name": string;
        "sex": string;
        "email": string;
        "mobile": number;
        "roll_number": number;
        "program": {
          "id": number;
          "department": string;
          "department_name": string;
          "join_year": number;
          "graduation_year": number;
          "degree": string;
          "degree_name": string
        };
        "secondary_emails": [
          {
            "id": number;
            "email": string
          }
        ];
        "contacts": [
          {
            "id": number;
            "number": number
          }
        ];
        "insti_address": {
          "id": number;
          "room": number;
          "hostel": string;
          "hostel_name": string;
        }
      }