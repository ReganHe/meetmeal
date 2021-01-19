import axios from 'axios';

function RegisterApi(data){
	axios({
		method: 'post',
		url: '/rest/V1/customers',
		data: {
			"customer": {
				"email": `123${data.user}@example.com`,
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
						"telephone": data.user,
						"countryId": "ZH"
					}
				]
			},
			"password": data.old
		}
	}).then(resp => {
		console.log(resp)
	})
}

export  {RegisterApi}