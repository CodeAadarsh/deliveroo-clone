import {defineField, defineType} from "sanity"

export default defineType({
  name: "Restraunts",
  title: "Restraunts",
  type: "document",
  fields: [{

   name: "name",
   type: "string",
    title: "Restruant Name",
    validation: (Rule) => Rule.required(),
  },
  {
    name: "description",
    type: "string",
    title: "Description",
    validation: (Rule) => Rule.max(200),

  },
  {
    name:"image",
    type:"image",
    title:"Image of Restraunt",
  },
  {
    name:"lat",
    type:"number",
    title:"Latitude",
  },
  {
    name:"long",
    type:"number",
    title:"Longitude",
  },
  {
    name:"address",
    type:"string",
    title:"Restraunt Address", 
    validation: (Rule) => Rule.required(),
  },
  {
    name:"rating",
    type:"number",
    title:"Rating",
    validation: (Rule) => Rule.required().min(0).max(5).error("Rating must be between 0 and 5"),
  },
  {
    name:"type",
    type:"string",
    title:"Category",
    validation: (Rule) => Rule.required(),
    type: "reference",
    to: [{type: "category"}],
  },
  {
    name:"dishes",
    type:"array",
    title:"Dishes",
    of:[{
      type:"reference",
      to:[{type:"dish"}]
    }]
  }

  ],



})
