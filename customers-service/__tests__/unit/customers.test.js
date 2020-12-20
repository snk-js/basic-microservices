import { groupAndAgreggateByCity } from '#root/utils/transformers'

describe('Test customers endpoint pure functions', () => {
    it('it should group and agreggate raw array of object into expected obj format with count property "', async  () => {
        const obj = [
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bannister Acres, NC' },
            { city: 'Bent Pine, VA' }, 
            { city: 'Bent Pine, VA' }, 
            { city: 'Bent Pine, VA' }, 
            { city: 'Bent Pine, VA' }, 
            { city: 'Bent Pine, VA' }, 
            { city: 'Bent Pine, VA' },
        ]

        const answer = [
            { city: "Bannister Acres, NC", customers_total: 10 }, 
            { city: "Bent Pine, VA", customers_total: 6 }
        ]


        const result = groupAndAgreggateByCity(obj)
        
        expect(result).toStrictEqual(answer)

    }) 
})

