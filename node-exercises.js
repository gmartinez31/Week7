////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// 1) Read a File ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.
// EX: $ node cap_file.js
//     filename: file1.txt
//     HELLO, I AM FILE 1.
var fs = require('fs');
var readline = require('readline');

// Basically like input() in Python //
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Filename: ', function (filename) {
//     rl.close();
//     fs.readFile(filename, function (err, buffer) {
//         if (err) {
//             console.log(err.message, 'u dumb af');
//             return;
//         }
//         var content = buffer.toString();
//         var upcased = content.toUpperCase();
//         console.log(upcased);
//     });
// });

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// 2) DNS Lookup ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.Example:
// EX: $ node dns_lookup.
//     Domain name: yahoo.com
//     IP Address: 98.139.183.24
// const dns = require('dns')

// rl.question('Domain Name: ', function(dnss) {
//     rl.close();
//     dns.lookup(dnss, function(err, address, family) {
//         if (err) {
//             console.log(err.message, 'No domain');
//             return;
//         }
//         console.log('address: %j family: IPv%s', address, family);
//         // console.log(addresses)
//     });
// });

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// 3) Read and write ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// Write a program to prompt the user for two file names, the first file will be the input and the second file will be the output. 
// The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.
// rl.question('Input File: ', function (input) {
//     rl.question('Output File: ', function (output) {
//         rl.close();
//         fs.readFile(input, function (err, buffer) {
//             if (err) {
//                 console.log(err.message, 'u dumb af');
//                 return;
//             }
//             var content = buffer.toString();
//             fs.writeFile(output, content, function (err) {
//                 if (err) {
//                         console.log(err.message, 'u dumb af');
//                         return;
//                 }
//                 console.log("File Save: ", output);
//             });
//         });
//     });
// });
//copied callback.js to test.js to verify this function worked

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// 4) Save a Web Page ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to.
rl.question('URL: ', function(urls) {
    rl.question('Save to file: ', function(filename){ 
        rl.close();
        fs.writeFile(filename, urls, function (err) {
            if (err) {
                console.log(err.message, 'u dumb af');
                return;
            }
            console.log('Saved to File: ', filename);
        });
    });
});