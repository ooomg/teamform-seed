describe('Test site.js', function() {


  //
  // Example: A test case of getRandomIntInclusive
  //
  describe('getRandomIntInclusive Coverage Test', function() {

    it('value within 1 to 3', function() {
      var value = getRandomIntInclusive(1, 3);
      expect( value>=1 && value <= 3 ).toEqual(true);
    });

  });

  describe('getURLParameter testing',function(){
    it('getURL',function(){
      var name = getURLParameter('google');
      expect(name).toEqual(decodeURIComponent((new RegExp('[?|&]google' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null);
    });  
  });

  describe('initalizeFirebase testing',function(){
    it('ini firebase',function(){
      var frbas= new initalizeFirebase();
      expect(frbas).toBeDefined();
    });
  });


  /* describe('retrieveOnceFirebase testing',function(){
  	 it('retriveonce', function(){
  	 	var fb="fb"; var ref="app/long"; var callbk="abc";
  	 	var val=retrieveOnceFirebase(fb,ref,callbk);
  	    expect(retrieveOnceFirebase(fb,ref,callbk)).toBeDefined();
  	 });
   });
*/
});
