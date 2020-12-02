import axios from 'axios';

function RegisterApi(){
	axios({
		method: 'post',
		url: '/rest/V1/customers',
		data: {
			"customer": {
				"email": "123@example.com",
				"firstname": "jond",
				"lastname": "2020",
				"addresses": [
					{
						"defaultShipping": true,
						"defaultBilling": true,
						"firstname": "Jane",
						"lastname": "Doe",
						"region": {
							"regionCode": "NY",
							"region": "haikou",
							"regionId": 43
						},
						"postcode": "10755",
						"street": [
							"123 Oak Ave"
						],
						"city": "Purchase",
						"telephone": "512-555-1111",
						"countryId": "ZH"
					}
				]
			},
			"password": "Password1"
		}
	}).then(resp => {
		console.log(resp)
	})
}

export  {RegisterApi}