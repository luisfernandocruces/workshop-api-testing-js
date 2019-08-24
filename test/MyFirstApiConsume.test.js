const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');
<<<<<<< HEAD
=======

>>>>>>> d23c0337411921710062aca82112705105167422
const expect = chai.expect;

describe('First Api Tests', () => {

<<<<<<< HEAD
=======

>>>>>>> d23c0337411921710062aca82112705105167422
    it('Consume GET Service', async () => {
        const response = await agent.get('https://httpbin.org/ip');
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body).to.have.property('origin');
    });

<<<<<<< HEAD

=======
>>>>>>> d23c0337411921710062aca82112705105167422
    it('Consume GET Service with query parameters', async () => {
        const query = {
        name: 'John',
        age: '31',
        city: 'New York'
        };
<<<<<<< HEAD
=======
    
>>>>>>> d23c0337411921710062aca82112705105167422
        const response = await agent.get('https://httpbin.org/get').query(query);   
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);

    });

<<<<<<< HEAD

=======
>>>>>>> d23c0337411921710062aca82112705105167422
    it('Consume HEAD Service', async () => {
        const response = await agent.head('https://httpbin.org/ip');
        expect(response.status).to.equal(statusCode.OK);
    });

<<<<<<< HEAD

=======
>>>>>>> d23c0337411921710062aca82112705105167422
    it('Consume PATCH Service', async () => {
        const query = {
            name: 'John',
            age: '31',
            city: 'New York'
        };
<<<<<<< HEAD
        const response = await agent.patch('https://httpbin.org/patch').query(query);
        expect(response.status).to.equal(statusCode.OK);
    });


=======

        const response = await agent.patch('https://httpbin.org/patch').query(query);
    
        expect(response.status).to.equal(statusCode.OK);
    });

>>>>>>> d23c0337411921710062aca82112705105167422
    it('Consume PUT Service', async () => {
        const query = {
            name: 'John',
            age: '31',
            city: 'New York'
        };
<<<<<<< HEAD
        const response = await agent.put('https://httpbin.org/put').query(query);
        expect(response.status).to.equal(statusCode.OK);
    });


=======

        const response = await agent.put('https://httpbin.org/put').query(query);
    
        expect(response.status).to.equal(statusCode.OK);
    });

>>>>>>> d23c0337411921710062aca82112705105167422
    it('Consume DELETE Service', async () => {
        const query = {
            name: 'John',
            age: '31',
            city: 'New York'
        };
<<<<<<< HEAD
        const response = await agent.delete('https://httpbin.org/delete').query(query);
        expect(response.status).to.equal(statusCode.OK);
    });
=======

        const response = await agent.delete('https://httpbin.org/delete').query(query);
    
        expect(response.status).to.equal(statusCode.OK);
    });

>>>>>>> d23c0337411921710062aca82112705105167422
});
