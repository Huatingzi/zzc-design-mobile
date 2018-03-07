const fs = require( 'fs' );
const path = require( 'path' );
const build = require( './build' );
const watch = require( './watch' );

const CWD = process.cwd();
const COMPONENTS_PATH = path.join( CWD, './components' );
const ZZC_ENV = process.env.ZZC_ENV;

let dirs = fs.readdirSync( COMPONENTS_PATH );

let excludeDir = { _util: true, style: true, '.DS_Store': true, '.babelrc': true };

// if ( dirs.length > 0 ) {
//     for ( let i = 0; i < dirs.length; i++ ) {
//         if ( !excludeDir[dirs[i]] ) {
//             if ( ZZC_ENV == 'build' ) {
//                 build( dirs[i], dirs[i] == 'index.js' ? true : false );
//             } else {
//                 watch( dirs[i], dirs[i] == 'index.js' ? true : false );
//             }
//         }
//     }
// }
build( 'aaa',false );