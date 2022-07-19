import {app} from "../../../src"
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

// describe('Test API', () => {
//     describe('/api/trucks/:id', () => {
//         it('should return an error', function () {
//             return chai.request(app).get('/api/trucks/1')
//                 .then(res => {
//                     chai.expect(res.status).to.eql(500)
//                 })
//         });
//     })
// })