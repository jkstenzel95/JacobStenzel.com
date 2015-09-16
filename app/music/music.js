'use strict';

angular.module('music', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('music', {
  	url: '/music',
    controller: 'MusicCtrl'
  })
  .state('music.piece',	{
  	url: '/:piece',
  	controller: 'MusicCtrl'
  });
}])

.controller('MusicCtrl', ['$scope', '$sce', function($scope, $sce) {
	var self = this;
	var piece1 = {
		name: 'The Insomniac',
		sref: 'The-Insomniac',
		video: 'https://www.youtube.com/embed/WlFNjR2TSu4',
		content: "The Insomniac is a piece that follows the thoughts and mindset of one that has fallen victim to an unwilling stream of thought that obscures judgement, fosters anxiety, and keeps mental clarity at bay. This theme is explored specifically through the concept of insomnia, the unwilling wakefulness at the hand of these stray but persistent thoughts, and features quotes by Sophia Vilar, Elizabeth Hildebrand, and Amelia Dirks, and Jacob Stenzel that are digitally twisted and contorted over the course of the performance.\nThis piece was coded in the Pure Data visual programming language (picture something like LabVIEW, but for signal processing, and you'll get the idea) for 16 laptops running pd-l2ork, Ico Bukvic's in-house distribution of Pure Data. All of the instruments are designed to be interfaced with via Wii Remote. The piece was performed by Virginia Tech's own L2Ork Linux Laptop Orchestra during the DISIS 2015 spring concert on May 4th, 2015, in The Cube at the Virginia Tech Moss Arts Center. The piece was written for 14 performers and 1 conductor (a role I had the pleasure of undertaking!). The performance featured 4 unique patches/instruments. The piece and its associated instruments were put together over the span of a year and then rehearsed over the course of a month to yield this performance, one I am very proud of, both as a composer and a programmer. I hope you enjoy it as much as I have!"
	};
	var piece2 = {
		name: 'Racing The Clock',
		sref: 'Racing-The-Clock',
		video: 'https://www.youtube.com/embed/4YYJ-mTUn_M',
		content: "“Racing the Clock” is a piece that explores three variants of fear: A “happy fear”, or a sort of playful anxiety; an uncontrolled dreadful fear, the sort that is often paired with rage; and the type of composed anticipatory fear that leads to action. The piece opens in a manner that introduces a rhythmic motif that is twisted and toyed with during the “anxiety” section, strong low brass chords and percussion hits present in the “dread” section, and erratic solo passages that harken to the “anticipation” section. The somewhat dark intro grows lighter as woodwinds trill into a major seventh chord before the full band enters into a much brighter texture. The anxiety section enters from here in an unexpectedly light manner, featuring interplay between upper woodwinds and trumpets, though the full ensemble soon discretely ushers the piece into an equally shocking explosion of percussion, clustered chords in the lower register, and polychords across registers and timbres. The anxiety section is then returned to in a fuller manner, exploring much more of the ensemble. Likewise, the dread section is then revisited with much more intensity, now featuring drastic glissandos in the string section and a soaring French horn and clarinet line. The section seems to drop off after a full orchestra hit and enter a much sparser and quieter texture with a chugging string bass and tuba line as the piece enters the anticipation section. Clarinets and trumpets enter the scene with a familiar line, initially with a fair amount of breathing room between parts, but finally in a clustered manner with several major seconds present. A vibraphone riff enters, hinting at its role in the passage to come. A cello in its upper register performs a duet with a violin that explores a large chunk of its range. The two echo each other and explore previous rhythmic ideas alongside the vibraphone, which provides the occasional independent comment. After a few hits welcome certain sections of the orchestra, the full ensemble begins to creep back in, before dropping off into an unsettlingly light variant of the dread theme that soon drops off into its full intensity for a brief moment before ushering in a fully fleshed out variant of the anxiety theme with many more moving parts. The piece ends abruptly in the familiar “dread” section on a very dissonant and piercing note, an ending that suggests that this idea of motivation by fear and living a life centered such things is not a sustainable way of living, and is a lifestyle that will repeat itself until actively silenced by the individual."
	};
	var piece3 =  {
		name: 'A Fragile State',
		sref: 'A-Fragile-State',
		video: 'https://www.youtube.com/embed/9eYVpnO2LqI',
		content: "\"A Fragile State\" tells a tale of the dread, instability, and resolution or acceptance that is faced in situations such as being presented with grim news, facing buckling responsibility, or coping with the insurmountable. The piece opens in a brooding and mysterious rubato with dark, open intervals that can be interpreted as the hopeless that precedes a surrender of sorts, the shock from the initial confrontation of the bleak or grave, or the foreshadowing of the storm to come. The soprano sax enters the rubato, sorrowfully floating through the newly painted void. At the conclusion of this melodic line, the piano begins a pulsing bassline that climbs out of the texture and ushers in the start to a realization of sorts as the individual begins to understand the scene and a more cohesive line begins. The piano soon bursts through the texture into a vivid descending line as our character takes on the unbearable. An unsettling dark but playful refrain is introduced, equally strong but nimbler as it twirls and dances through dorian undertones into foreign keys and back. The fragility and instability is juxtaposed with a more orderly B section of sorts represents a moment of clarity that leads the protagonist to a more composed response. This rationality is quickly undermined by panic and frustration as clustered chords and the hefty descending line return our character to a fragile state. A more staccato bridge leads this individual to his final response or answer in a moment of clarity, or at least a state of organized clutter. After one more restatement of the main melody, it collapses in a brilliant and dissonant instant into 8 measures of clear melodic counterpoint as a state of resolution or acceptance is reached. The piano line then repeats and decays like a black box replaying the instants before a crash. An unsettling suspended chord in the upper register enters and attempts to cope with the crash and move forward, gently guiding the decaying melodic line towards a major tonality, but failing to do so as the lower line fights the light one last time with a borrowed chord from the parallel dorian. The piece pauses for a moment before entering its final decay. The lines do not fight nor agree now, they only share the same space. Neither part wins as an incompletely resolved m6 chord echoes out."
	};
	var piece4 =	{
		name: 'Come The Winter\'s End',
		sref: 'Come-The-Winter\'s-End',
		content: "Come the Winter’s End is a piece that explores the transition between winter and spring. Chromatic passages in the woodwinds and mallets and syncopated jazz chords mark a renewed sense of energy, while a more mellow section featuring sustained clarinet lines and a Vibraphone solo call to mind the nighttime fauna of this new season. The piece features a melodic line based on the plagal cadence."
	};
	self.getFromSref = function (sref)	{
		return self.pieceItems.filter(function(obj)
		{
			return obj.sref === sref;
		})[0];

	};
	self.pieceItems = [piece1, piece2, piece3, piece4];
	self.activePiece = '';

	// Watching for a route change so I can search it up based on its sref and set pieceItems accordingly
	$scope.$watch('$stateParams.piece', function(val)	{
		if (val != null)
		{
			var newPiece = self.getFromSref(val);
			if (newPiece.video !== undefined) {
				$sce.trustAsResourceUrl(newPiece.video);
			}
			self.activePiece = newPiece;
		}
	});
}])