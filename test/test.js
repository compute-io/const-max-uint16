'use strict';

// MODULES //

var tape = require( 'tape' );
var pow = require( 'math-power' );
var MAX_UINT32 = require( './../lib' );


// TESTS //

tape( 'main export is a number', function test( t ) {
	t.equal( typeof MAX_UINT32, 'number', 'main export is a number' );
	t.end();
});

tape( 'the exported value is 2**16-1', function test( t ) {
	t.equal( MAX_UINT32, pow(2,16)-1, 'returns 2**16-1' );
	t.end();
});
