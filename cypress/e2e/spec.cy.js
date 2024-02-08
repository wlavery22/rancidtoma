describe('template spec', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
	// it('Should pass a practice test', () => {
	// 	expect(true).to.equal(true)
	// });
	it('Should be able to see the Title of the Webpage', () => {
		cy.get('header')
			.contains('All Movies')
	});
	it('Should be able to see a selection of movies', () => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
			statusCode: 200,
			fixture: 'example.json'
		})
			.get(".all-movies-container").find('.movie-card').should("have.length", 40)
			.get(".all-movies-container").find('.movie-card').eq(0).should("have.id", 694919)
			.get(".all-movies-container").find('.movie-card').eq(39).should("have.id", 585244)
	});
	it('Should be able to see the information of a specific movie', () => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
			statusCode: 200,
			fixture: 'get-data.json'

		})
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
			statusCode: 200,
			fixture: 'post-data.json'

		})
			.get(".all-movies-container").find('.movie-card').eq(0).click()
			.get('.movieInfo').should("have.id", 436270)
			.get('.rating').should("have.text", '4')
			.get('.poster').should("have.text", 'Black Adam')
			.get('.runTime').should("have.text", '125')
			.get('.genres').should("have.text", 'ActionFantasyScience Fiction')
	});
	it('Should be able to go from home, to a specific movie, and then back to home page', () => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
			statusCode: 200,
			fixture: 'get-data.json'

		})
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
			statusCode: 200,
			fixture: 'post-data.json'

		})
			.get(".all-movies-container").find('.movie-card').eq(0).click()
			.get('.movieInfo').should("have.id", 436270)
			.get(".movieInfo").click()
			.get(".all-movies-container").find('.movie-card').eq(0).should("have.id", 436270)
	});

	it('Should be able to handle 500 level errors', () => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
			statusCode: 200,
			fixture: 'get-data.json'

		})
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
			statusCode: 500,
		})
			.get(".all-movies-container").find('.movie-card').eq(0).click()
			.get('.errorPage')
	});
})
