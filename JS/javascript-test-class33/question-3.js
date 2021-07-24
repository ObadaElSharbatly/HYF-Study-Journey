/**
 * You have been tasked to create a function that finds the relevant comments on a social media platform.
 * The comment for what the function should do has been written already, you only need to fill in the code!
 */

/**
 * This function takes an array of comments and a userId string and finds the ones that are relevant.
 * Each comment should have:
 * - a `commenterId` property that is the id of the user that made the comment
 * - a `likedByUserIds` property that is an array of user ids that have liked that comment
 * 
 * A comment is relevant IF:
 * - the `commenterId` is the same as the `userId` parameter
 * - the `userId` parameter is in the `likedByUserIds` array
 */
const findRelevantComments = (comments, userId) => {
    // I am gonna filter the comments parameter and put two conditions like requirements
    // also will use includes function with likedByUserIds property because it's type is array.
    const relevantUser = comments.filter(
    (element) => 
    element.commenterId === userId || element.likedByUserIds.includes(userId)
    );
    return relevantUser;
}

/**
 * TEST CODE. DO NOT EDIT
 */
const testComments = [{
    id: 'c---1',
    commenterId: 'u---1',
    likedByUserIds: [],
}, {
    id: 'c---2',
    commenterId: 'u---2',
    likedByUserIds: ['u---3']
}, {
    id: 'c---3',
    commenterId: 'u---3',
    likedByUserIds: ['u---1'],
}];

const testResult = findRelevantComments(testComments, 'u---1');
console.assert(testResult.length === 2);
console.assert(testResult[0].id === testComments[0].id);
console.assert(testResult[1].id === testComments[2].id);