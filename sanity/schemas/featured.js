export default {
    name  : 'featured',
    title: 'Featured Dish',
    type  : 'document',
    fields: [
        {
            name: 'name',
            title: 'Featured Dish Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name:'Restaurant',
            title:'Restaurant',
            type:'array',
            of:[{type:'reference',to:[{type:'Restraunts'}]}],
        },
    ],
}