/* global describe, it */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Test API', () => {
	/**
	 * Test the GET route
	 */
	describe('GET /api/v1/company', () => {
		it('It should GET all of the companies as an array', (done) => {
			chai.request(server)
				.get(`/api/v1/company`)
				.end((err, response) => {
					response.should.have.status(200);
					response.body.should.be.a('object');
					response.body.should.have.property('msg').and.eq('ok');
					response.body.should.have.property('data').and.be.an('array');
					done();
				});
		});

		it('It should NOT GET companies', (done) => {
			chai.request(server)
				.get('/api/v1/company1')
				.end((err, response) => {
					response.should.have.status(404);
					done();
				});
		});

		it('It should NOT GET companies', (done) => {
			chai.request(server)
				.get('/api/v2/company')
				.end((err, response) => {
					response.should.have.status(404);
					done();
				});
		});
		it('It should GET v2 under construction', (done) => {
			chai.request(server)
				.get('/api/v2')
				.end((err, response) => {
					response.should.have.status(503);
					done();
				});
		});
	});
});
