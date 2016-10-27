//fart noises
        
var superfart = 'Fartsound7.wav';
var leftinpants = 'Fartsound12.wav';
var brownpants = 'Fartsound13.wav';
var ew = 'Fartsound11.wav';
var hersheysquirt = 'Fartsound14.wav';
var tearjerker = 'Fartsound6.wav';
var goosebumps = 'Fartsound10.wav';
var thunder = 'Fartsound3.wav';

var shortandsweet = 'fart1.wav';
var gasattack = 'fart2.wav';
var old1 = 'fart3.wav';
var old2 = 'oldfart.wav';

var fartSounds = [superfart,
					leftinpants,
					brownpants,
					ew,
					hersheysquirt,
					tearjerker,
					goosebumps,
					thunder,
					shortandsweet,
					gasattack,
					old1,
					old2];
					
exports.getRandomFart = function()
{
	var fartIndex = Math.floor(Math.random() * fartSounds.length);
	return fartSounds[fartIndex];
}