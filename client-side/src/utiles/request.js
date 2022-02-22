import axios from 'axios';
import { BASE_URL, VERSION } from './config';
export async function getCompanies() {
	try {
		const { data } = await axios.get(`${BASE_URL}/${VERSION}/company`);
		return data;
	} catch (error) {
		throw new Error('network error');
	}
}
