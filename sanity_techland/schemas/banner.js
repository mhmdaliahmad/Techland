import { FiCreditCard } from "react-icons/fi";

export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    icon: FiCreditCard,

    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },

        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },

    ],
  };