import { defineType, defineField } from "sanity";

export default defineType({
    name: 'users',
    title: 'Users',
    type: 'document',
    fields: [
      defineField(
        {
            name: 'email',
            title: 'User email',
            type: 'string',
            readOnly: true
        }
      ),
      defineField(
        {
            name: 'username',
            title: 'Username',
            type: 'string',
            readOnly: true
        }
      ),
      defineField(
        {
            name: 'cart',
            title: 'User cart',
            type: 'string',
            readOnly: true
        }
      ),
      defineField(
        {
            name: 'pass',
            title: 'Pass',
            type: 'string',
            readOnly: true,
            hidden: true
        }
      )
    ]
});