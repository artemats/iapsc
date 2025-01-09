// export const fetchLinkedInPosts = async () => {
// 	const data = {
// 		grant_type: 'client_credentials',
// 		client_id: '78txmoo7wraw85',
// 		client_secret: 'WPL_AP1.3r0ePjSoabgSHmO2.Ipn45Q==',
// 	};
//
// 	await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		body: new URLSearchParams(data),
// 	})
// 		.then(response => response.json())
// 		.then(data => console.log('Access Token:', data.access_token))
// 		.catch(error => console.error('Error:', error));
//
// }