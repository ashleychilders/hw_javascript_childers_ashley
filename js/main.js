var iceCream = [
    'chocolate chip cookie dough', 'rocky road', 'vanilla',
    'mint chocolate chip'
];

var presidents = [
    { firstName: 'Barack', lastName: 'Obama', termLength: 2,
        party: 'democrat', yearsofPresidency: 7 },
    { firstName: 'George W', lastName: 'Bush', termLength: 2,
        party: 'republican', yearsofPresidency: 8 },
    { firstName: 'Bill', lastName: 'Clinton', termLength: 2,
        party: 'democrat', yearsofPresidency: 8 },
    { firstName: 'George H', lastName: 'Bush', termLength: 1,
        party: 'republican', yearsofPresidency: 4 },
    { firstName: 'Ronald', lastName: 'Reagan', termLength: 2,
     party: 'republican', yearsofPresidency: 8 }

];
console.log( presidents [ 2 ].firstName, presidents [ 2 ].lastName );

function howdy( name, greeting ) {
    return name + ' says ' + greeting;
}
var message = howdy( 'Ashley Childers', 'Hello from DC!' );
console.log( message );
