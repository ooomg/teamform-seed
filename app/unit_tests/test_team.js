describe('Test team.js', function(){
  var controller;
  var $scope;

  if(firebase.apps.length === 0) {
		initalizeFirebase();
	}

  beforeEach(module('teamform-team-app'));

  var $controller;
  var $firebaseObject;
  var $firebaseArray;

 //  var controller;
 //  var $scope;

 //  	if(firebase.apps.length === 0) {
	// 	initalizeFirebase();
	// }


  beforeEach(inject(function(_$controller_, _$firebaseObject_, _$firebaseArray_,$rootScope){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $scope=$rootScope.$new();
    controller = _$controller_('TeamCtrl', { $scope: $scope });
    $firebaseObject = _$firebaseObject_;
    $firebaseArray = _$firebaseArray_;
  }));


  // beforeEach(function() {
  //   $scope = {};
  //   controller = $controller('TeamCtrl', { $scope: $scope });
  // });
  	it("change teamsize",function(){
  		$scope.param.currentTeamSize=3;
  		$scope.range = {
			minTeamSize: 1, maxTeamSize: 5
		};
  		$scope.changeCurrentTeamSize(1);
		expect($scope.param.currentTeamSize).toEqual(4);
		
//process request
		$scope.param.teamMembers=["one","two"];
  		$scope.param.currentTeamSize=3;
  		$scope.processRequest("one");
  		$scope.processRequest("aaa");
  		$scope.processRequest("bbb");

 //remove member
 		$scope.removeMember("one");
 		$scope.param.teamMembers = ["aaa","bbb"];
		$scope.removeMember("member");
	
	//view requestreceive
		$scope.param = {teamName: "team1"};
		$scope.member = [
			{$id: "123", selection: ["team1", "team2"]},
			{$id: "456", selection: ["team3", "team2"]},
			{$id: "789", selection: ["team1", "team3"]}
		];
		$scope.refreshViewRequestsReceived();
		expect($scope.requests).toEqual(["123", "789"]);

		//loadFunc
		$scope.loadFunc();
  	});
  	// it("process teammem",function(){
  	// 	$scope.param.teamMembers=["one","two"];
  	// 	$scope.param.currentTeamSize=3;
  	// 	$scope.processRequest("one");
  	// 	$scope.processRequest("aaa");
  	// 	$scope.processRequest("bbb");
  	// });
	it("test saveFunc", function() {
		team_ready();



		$scope.param.currentTeamSize=10;
//		$scope.currentUser.inTeam = "tName";
		$scope.param.teamName = "tName";
		$scope.param.teamMembers =["member"];
		$scope.saveFunc();
	});
	// it("test loadFunc", function() {
	// 	$scope.loadFunc();
	// });


 //   it('test',function(){
 //     team_ready();
      // $scope.refreshViewRequestsReceived();

      // $scope.range.minTeamSize = 0;
      // $scope.range.maxTeamSize = 10;
      // $scope.changeCurrentTeamSize(4);
//      $scope.saveFunc();
//      $scope.loadFunc();
//      $scope.processRequest();
//      $scope.removeMember();
//    });
	// it("test CurTmSiz", function() {
	// 	$scope.param = {currentTeamSize: 2};
	// 	$scope.range = {minTeamSize: 1, maxTeamSize: 5};
	// 	$scope.changeCurrentTeamSize(1);
	// 	expect($scope.param.currentTeamSize).toEqual(3);
	// 	$scope.changeCurrentTeamSize(-5);
	// });
	// it("test pRequest", function() {
	// 	$scope.param.teamMembers = ["c","d"];
	// 	$scope.param.currentTeamSize =3;
	// 	$scope.processRequest("c");
	// 	$scope.processRequest("h");
	// 	$scope.processRequest("y");		
		
	// });




});
