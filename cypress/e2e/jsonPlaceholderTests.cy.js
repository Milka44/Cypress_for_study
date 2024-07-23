import 'cypress-plugin-api';
describe('JSONPlaceholder API Tests', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const testPostId = 1;
    const newPost = {
        title: 'Some great post',
        body: 'About smth special',
        userId: 1
    };

    it('Get post by id', () => {
        cy.api(`${baseUrl}/posts/${testPostId}`).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(testPostId);
            expect(response.body).to.have.keys(['userId', 'id', 'title', 'body']);
        });
    });

    it('Get posts list', () => {
        cy.api(`${baseUrl}/posts`).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
        });
    });

    it('Create new post', () => {
        cy.api('POST', `${baseUrl}/posts`, newPost).should((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('id');
            expect(response.body.title).to.eq(newPost.title);
            expect(response.body.body).to.eq(newPost.body);
            expect(response.body.userId).to.eq(newPost.userId);
            expect(response.body).to.have.keys(['userId', 'id', 'title', 'body']);
        });
    });

    it('Update post by id', () => {
        const updatedPost = {
            id: testPostId,
            title: 'Updated title',
            body: 'Updated body',
            userId: 1
        };

        cy.api('PUT', `${baseUrl}/posts/${testPostId}`, updatedPost).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(testPostId);
            expect(response.body.title).to.eq(updatedPost.title);
            expect(response.body.body).to.eq(updatedPost.body);
            expect(response.body.userId).to.eq(updatedPost.userId);
            expect(response.body).to.have.keys(['userId', 'id', 'title', 'body']);
        });
    });

    it('Delete post by id', () => {
        cy.api('DELETE', `${baseUrl}/posts/${testPostId}`).should((response) => {
            expect(response.status).to.eq(200);
        });
    });
});