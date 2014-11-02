
    var myEl = document.querySelector('seed-element');

    suite('<seed-element>', function() {

      test('defines the "author" property', function() {
        assert.equal(myEl.author, 'Dimitri Glazkov');
      });

      test('says hello', function() {
        assert.equal(myEl.sayHello(), 'seed-element says, Hello World!');

        var greetings = myEl.sayHello('greetings Earthlings');
        assert.equal(greetings, 'seed-element says, greetings Earthlings');
      });

      test('fires lasers', function(done) {
        myEl.addEventListener('seed-element-lasers-success', function(event) {
          assert.equal(event.detail.sound, 'Pew pew pew!');
          done();
        });
        myEl.fireLasers();
      });

    });
  