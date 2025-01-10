import middleware from 'next-auth/middleware';

export default middleware;

export const config = {
    // * - zero or more parameters
    // + - one o more parameters
    // ? - zero ore one parmeter
    matcher: [
        '/dashboard'
    ]
}