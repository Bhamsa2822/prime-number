import chai from "chai";
import mocha from "mocha";
import { prime1, prime2, prime3, prime4, prime5 } from "./controller/Primefunc.js";

const {describe,test} = mocha;
const {expect} = chai;

describe('prime1',()=>{
    test ('returning array between a given range',()=>{
        expect(prime1(1,10)).to.deep.equal({array:[2,3,5,7],size:4});
        expect(prime1(2,20)).to.deep.equal({array:[2,3,5,7,11,13,17,19],size:8})
        expect(prime1(-2,5)).to.deep.equal({array:[2,3,5],size:3})
    })

     test('returning object when passing none positive value',()=>{
         expect(prime1(0,0)).to.deep.equal({array:[],size:0})
         expect(prime1(-10,-5)).to.deep.equal({array:[],size:0})
         
     })
})

describe('prime2',()=>{
    test ('returning array between a given range',()=>{
        expect(prime2(1,10)).to.deep.equal({array:[2,3,5,7],size:4});
        expect(prime2(2,20)).to.deep.equal({array:[2,3,5,7,11,13,17,19],size:8})
        expect(prime2(-2,5)).to.deep.equal({array:[2,3,5],size:3})
    })

     test('returning object when passing none positive value',()=>{
         expect(prime2(0,0)).to.deep.equal({array:[],size:0})
         expect(prime2(-10,-5)).to.deep.equal({array:[],size:0})
         
     })
})

describe('prime3',()=>{
    test ('returning array between a given range',()=>{
        expect(prime3(1,10)).to.deep.equal({array:[2,3,5,7],size:4});
        expect(prime3(2,20)).to.deep.equal({array:[2,3,5,7,11,13,17,19],size:8})
        expect(prime3(-2,5)).to.deep.equal({array:[2,3,5],size:3})
    })

     test('returning object when passing none positive value',()=>{
         expect(prime3(0,0)).to.deep.equal({array:[],size:0})
         expect(prime3(-10,-5)).to.deep.equal({array:[],size:0})
         
     })
})

describe('prime4',()=>{
    test ('returning array between a given range',()=>{
        expect(prime4(1,10)).to.deep.equal({array:[2,3,5,7],size:4});
        expect(prime4(2,20)).to.deep.equal({array:[2,3,5,7,11,13,17,19],size:8})
        expect(prime4(-2,5)).to.deep.equal({array:[2,3,5],size:3})
    })

     test('returning object when passing none positive value',()=>{
         expect(prime4(0,0)).to.deep.equal({array:[],size:0})
         expect(prime4(-10,-5)).to.deep.equal({array:[],size:0})
         
     })
})

describe('prime5',()=>{
    test ('returning array between a given range',()=>{
        expect(prime5(1,10)).to.deep.equal({array:[2,3,5,7],size:4});
        expect(prime5(2,20)).to.deep.equal({array:[2,3,5,7,11,13,17,19],size:8})
        expect(prime5(-2,5)).to.deep.equal({array:[2,3,5],size:3})
    })

     test('returning object when passing none positive value',()=>{
         expect(prime5(0,0)).to.deep.equal({array:[],size:0})
         expect(prime5(-10,-5)).to.deep.equal({array:[],size:0})
         
     })
})