'use strict';

angular.module('projects', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('projects', {
  	url: '/projects',
    controller: 'ProjectsCtrl'
  })
  .state('projects.project',	{
  	url: '/:project',
  	controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {
	var self = this;
	var project1 = {
		name: 'The Insomniac',
		placecard: 'Insomniac.jpg',
		sref: 'The-Insomniac',
		content: "The Insomniac is a piece that follows the thoughts and mindset of one that has fallen victim to an unwilling stream of thought that obscures judgement, fosters anxiety, and keeps mental clarity at bay. This theme is explored specifically through the concept of insomnia, the unwilling wakefulness at the hand of these stray but persistent thoughts, and features quotes by Sophia Vilar, Elizabeth Hildebrand, and Amelia Dirks, and Jacob Stenzel that are digitally twisted and contorted over the course of the performance.\nThis piece was coded in the Pure Data visual programming language (picture something like LabVIEW, but for signal processing, and you'll get the idea) for 16 laptops running pd-l2ork, Ico Bukvic's in-house distribution of Pure Data. All of the instruments are designed to be interfaced with via Wii Remote. The piece was performed by Virginia Tech's own L2Ork Linux Laptop Orchestra during the DISIS 2015 spring concert on May 4th, 2015, in The Cube at the Virginia Tech Moss Arts Center. The piece was written for 14 performers and 1 conductor (a role I had the pleasure of undertaking!). The performance featured the following 4 unique patches/instruments:\nThe \"OscAr\" instrument is the primary melodic instrument and makes up 9 of the 14 parts. The Wii Nunchuk joystick serves as a selection wheel that can choose between up to 8 different pitches in an octave (with the ability to go between octaves by scrolling 360° or by using the remote's A/B buttons). The OscAr GUI displays this wheel and the associated pitches, visually responds to user input, and lights sections of the wheel up when the piece requests a certain pitch, making performance as easy as following a light on a wheel or playing a virtual game of \"Whack-a-Mole\". Reverb can be toggled via the Z button and various pitch collections can be explored via the D-Pad. Volume is controlled via the pitch of the Wii Remote and the degree of the pitch's vibrato is tied to the pitch of the Nunchuk. The +/- buttons allow for toggling between four unique timbres (all of which can be heard over the course of the performance), each with a filter whose speed or cutoff can be determined by the roll of the Nunchuk.\nThe \"Glitcher\" instrument is a unique Wii Remote controlled sampler that manipulates a series of quotes written by  Sophia Vilar, Elizabeth Hildebrand, and Amelia Dirks, and myself on the subject of insomnia. The instrument features two modes (which are toggled between via the Z button), a looper that serves as a \"broken record\" effect, and a granulator that separates playback speed from pitch, allowing for some sinister contortions of the original clip by drawing out its playback speed. The Wii Nunchuk's joystick allows for the selection of one of the 8 clips in a sound bank (where each of the three instances of this instrument has their own sound bank with a unique speaker). A clip is started with the A button, or the +/- buttons (which randomize the starting point of the playback). From there, holding the B button initializes the chosen effect, where the roll of the Nunchuk controls either the sample size of the looper or the playback speed of the granulator. Holding C causes the pitch of the clip to be manipulated according to the pitch of the Nunchuk.\nPercussion calls for two performers, one of which is given control over an open and closed hi-hat as well as a crash cymbal, the other of which is responsible for a snare rim-shot, a bass drum, and a unique metallic rim-shot produced through tinkering around with FM synthesis. All of these sounds are procedurally generated with slight variation between each hit through the randomization of certain parameters. The volume of each instrument is controlled via the direction of the Nunchuk joystick. Each instrument is triggered by the Z, C, A, or B buttons. The FM rim-shot sound allows for further control, allowing the performer to control its sustain by moving the Wii Remote backward after the hit, as if in recoil.\nA Conductor patch is responsible for holding the piece together by controlling the starting point of the piece, the rehearsal speed, sending a message to each performer, and sending a \"wake-up\" rumble to the Wii Remote of each performer. All of these features are mapped to controls on the Wii Remote, aside from sending written messages to each performer (which is confined to the keyboard for obvious reasons).\nThe major focus of creating these instruments was balancing ease of use and ease of learning with power and flexibility. The piece was designed to be performable by those that do not have a traditional music background and was designed to be learned within the time span of a month or less. The solution to this was the creation of an informative GUI paired with a powerful synchronized music \"tracker\" system (Does anybody remember the phrase \"follow the bouncing ball\"? Imagine something akin to that). An 8x3 grid relays information such as which pitch or sound to play, how to play it, and what one should expect to hear from the rest of the ensemble. The top and bottom row of 8 cells all represent a different count and contain a 3 character symbol that represents either the button to hit or else the MIDI pitch that is expected. The middle row (Or in the case of the less quantitized \"Glitcher\"'s tracker, the only row) is designated for relaying messages from the piece or else the Conductor.\nThe piece and its associated instruments were put together over the span of a year and then rehearsed over the course of a month to yield this performance, one I am very proud of, both as a composer and a programmer. I hope you enjoy it as much as I have!",
		video: 'https://www.youtube.com/embed/WlFNjR2TSu4'
	};
	var project2 = {
		name: 'TileTraveler',
		placecard: 'TileTraveler.jpg',
		sref: 'TileTraveler',
		content: "TileTraveler is a tile-based movement game where the player is tasked with reaching the exit of the level without being killed by an enemy or jumping off the stage. The only tools available to the player are movement-based. The controls are simple, consisting of four directional movements and the ability to double jump to cross gaps. The app was designed for Android phones and tablets.\nTileTraveler was my first time leading a group of software developers as well as my first time conceptualizing and building a piece of software from the ground up. The idea was my own, harkening back to old Frogger games, while the art style was a decision made by Luciano Biondi. As the leader of this group, I laid forth the base idea (a tile-based movement game) and the framework for how it might be done. My groupmates Luciano Biondi and Ezra Richards helped implement specifics, such as enemy design, stage design, and the tools to ease the creation of both.\nThe game was designed as a final project for our Data Structures and Software Design course, where it received high marks and the award for 'Best Graphic Design'.",
		video: 'https://www.youtube.com/embed/F39zXiwbk6E'
	};
	var project3 =  {
		name: 'GIS Lookup System',
		placecard: 'GIS.jpg',
		sref: 'GIS',
		content: "For this project, I fully designed, implemented, and tested a command line based GIS lookup program in Java and recreated the associated data structures (PR Quad Tree and Hashmap). The data structures and algorithms involved had a heavy focus on efficiency (being able to import 200,000+ records across two states, access by location range, and access by name in under 15 seconds). Ultimately, the project received a perfect score where the class average was about 67%."
	};
	var project4 =	{
		name: 'Protein Cavity Finder',
		placecard: 'Protein.jpg',
		sref: 'Protein-Cavity-Finder',
		content: "As a part of this project, I designed an algorithm for finding cavities enclosed in a protein described by a .pdb file based on an adjustable resolution size and probe size. The algorithm had a heavy focus on efficiency, being able to handle complex 100+ molecule proteins in 3D space while reporting no false positives (cavities that are actually open to the exterior of the protein, cavities that intersect with atoms, etc.). I Functioned as part of a group whose role assignment and development process heavily emphasized separation of concerns and abstraction, so that the team could minimize the time spent blocked and make the best use of all hands involved."
	};
	var project5 =  {
		name: 'MIPS32 Assembler',
		placecard: 'assembler.jpg',
		sref: 'MIPS32-Assembler',
		content: "For this project, I fully designed, implemented a MIPS32 assembler in C to convert a basic set of MIPS32 instructions, pseudo-instructions, and data directives into an ASCII representation of machine code with an emphasis on maintaining a scalable and flexible system. The assembler flexibly handled the .text and .data segments and was designed to match the output of the MARS MIPS assembler."
	};
	self.activeProject = '';
	self.projectItems = [project1, project2, project3, project4, project5];

	self.getFromSref = function (sref)	{
		return self.projectItems.filter(function(obj)
		{
			return obj.sref === sref;
		})[0];

	};

	$scope.$watch('$stateParams.project', function(val)	{
		if (val != null)
		{
			var newProject = self.getFromSref(val);
			self.activeProject = newProject;
		}
	});

}])