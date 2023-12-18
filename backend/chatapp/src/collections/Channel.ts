import { CollectionConfig } from "payload/types";

const Channel: CollectionConfig = {
    slug: "channels",
    fields: [
        {
            name: "channelName",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "members",
            label: "Members",
            type: "relationship",
            relationTo: "users",
            hasMany: true,
        },
        {
            name: "messages",
            label: "Messages",
            type: "relationship",
            relationTo: "messages",
            hasMany: true,
        }
    ],

}

export default Channel