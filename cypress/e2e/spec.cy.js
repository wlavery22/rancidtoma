describe('template spec', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Should be able to see the Title of the webpage, and a selection of movies', () => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
			statusCode: 200,
			fixture: 'example.json'
		})
		cy.get('header')
			.contains('Rancid Tomatillos')
			.get(".all-movies-container").find('.movie-card').should("have.length", 40)
			.get(".all-movies-container").find('.movie-card').first().should("have.id", 694919)
			.get(".all-movies-container").find('.movie-card').last().should("have.id", 585244)
			.url().should('eq', 'http://localhost:3000/')

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
			.url().should('eq', 'http://localhost:3000/')
			.get(".all-movies-container").find('.movie-card').first().click()
			.url().should('eq', 'http://localhost:3000/movie/436270')
			.get('.movieInfo').should("have.id", 436270)
			.get('.rating').should("have.text", 'Rating: 4')
			.get('.poster').should("have.text", 'Black Adam')
			.get('.runTime').should("have.text", 'Runtime : 125')
			.get('.genres').should("have.text", 'Genres: Action, Fantasy, Science Fiction')
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
			.url().should('eq', 'http://localhost:3000/movie/436270')
			.get('.movieInfo').should("have.id", 436270)
			.get(".exitButton").click()
			.get(".all-movies-container").find('.movie-card').eq(0).should("have.id", 436270)
			.url().should('eq', 'http://localhost:3000/')

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
			.get('.errorPage').should("have.text", 'Page not FoundClick this to head back home!')
			.url().should('eq', 'http://localhost:3000/movie/436270')
	});
})
