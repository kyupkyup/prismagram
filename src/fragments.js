export const USER_FRAGMENT= `
    id
    username
    avatar
`;

export const COMMENT_FRAGMENT = `
    fragment CommentParts on Comment{
        id
        text
        user {
            userName
        }
    }
`;

export const MESSAGE_FRAGMENT =`
    id
    text
    to{
        ${USER_FRAGMENT}
    }
    from{
        ${USER_FRAGMENT}
    }
`;

export const ROOM_FRAGMENT = `
    fragment RoomParts on Room {
        id
        participants{
            ${USER_FRAGMENT}
        }
        messages{
            ${MESSAGE_FRAGMENT}
        }
    }
`;
