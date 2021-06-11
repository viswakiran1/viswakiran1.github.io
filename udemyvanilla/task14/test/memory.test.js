const array = require('./arrays')

test('there must be object',()=>{
    
    expect(array.cardsData).toEqual(          
        expect.arrayContaining([      
          expect.objectContaining({   
            answer: 'thisIsAVariable'              
          })
        ])
    )
})