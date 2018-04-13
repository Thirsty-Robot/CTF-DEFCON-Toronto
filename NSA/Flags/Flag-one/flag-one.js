// So, variable _0x4c9e is an array
// Of 5 elements, for the computer 4
// Apparently they are hashes
// I could only decript them with these tool:
// ddecode.com/hexdecoder/
var _0x4c9e = ["\x44\x43\x34\x31\x36","\x73\x79\x6E\x74\x31\x7B\x7A\x30\x30\x61\x70\x34\x78\x72\x7D","\x4E\x6F\x6E\x65","\x70\x61\x72\x61\x74\x75\x3A","\x6C\x6F\x67"];

// The variable CTF equals our position zero in the array
// var CTF = \x44\x43\x34\x31\x36
var CTF = _0x4c9e[0];

// If our CTF variable is true
if(CTF == _0x4c9e[0]){
	// Flag variable will be equal to position number one in the array
	FLAG = _0x4c9e[1]
}
else {
	//Our variable will be equal to position 2 in the array
	FLAG = _0x4c9e[2]
};

// Acces to the Firefox console API
console[_0x4c9e[4]](_0x4c9e[3]);
console[_0x4c9e[4]](FLAG)
